/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';
import store from './store.js';
import UserContext from './UserContext.js';
import { getVarsFromDiscussionURL } from './util.js';
import CrimeDashboard from './CrimeDashboard.jsx';
import CommentList from './commentComponents/CommentList.jsx';
import CommentForm from './commentComponents/CommentForm.jsx';

class Discussion extends React.Component {
  static async fetchData(match, search, showError) {
    const query = `query getCrimeByID($crimeID: String!) {
      getCrimeByID(crimeID: $crimeID) {
        _id OffenseType OffenseDescription ReportDate
        OffenseStartDate OffenseEndDate Block District Beat CensusTract
        Longitude Latitude
      }
    }`;

    const { id, defaultVal } = getVarsFromDiscussionURL(match);
    const result = await graphQLFetch(query, { crimeID: id }, showError);
    const query2 = `query getCommentByCrimeID($input: String!) {
      getCommentByCrimeID(input: $input) {
        email crimeid content created givenName
      }
    }`;
    const result2 = await graphQLFetch(query2, { input: id }, showError);
    return {
      crime: result.getCrimeByID,
      comments: result2.getCommentByCrimeID,
      defaultVal,
    };
  }

  constructor(props) {
    super(props);
    const initialDate = store.initialData || { comments: [], crime: null };
    const { comments, crime, defaultVal } = initialDate;
    this.state = { comments, crime, defaultVal };
    delete store.initialData;
    this.graphQLAddComment = this.graphQLAddComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    const { crime } = this.state;
    if (crime === null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: prevMatch } = prevProps;
    const { match } = this.props;
    const prevVars = getVarsFromDiscussionURL(prevMatch);
    const vars = getVarsFromDiscussionURL(match);
    if (JSON.stringify(prevVars) !== JSON.stringify(vars)) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      location: { search },
      match,
      showError,
      showSuccess,
    } = this.props;
    const data = await Discussion.fetchData(match, search, showError);
    if (data) {
      this.setState({
        crime: data.crime,
        comments: data.comments,
        defaultVal: data.defaultVal,
      });
      showSuccess('load crime and comments successfully.');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async graphQLAddComment(comment, user) {
    const { showError } = this.props;
    const {
      crime: { _id },
    } = this.state;
    const mutation = `mutation postComment($input: CommentInput) {
      postComment(input: $input) {
        content
      }
    }`;
    const result = await graphQLFetch(
      mutation,
      { input: { crimeid: _id, content: comment, ...user } },
      showError,
    );
    if (result) {
      return result.postComment;
    }
    return null;
  }

  /**
   * @param {comment} string
   */
  async addComment(comment) {
    const { showError, showSuccess } = this.props;
    // const user = {
    //   email: 'bo@gmail.com',
    //   givenName: 'Bo',
    // };
    const { givenName, email } = this.context;
    const { content } = await this.graphQLAddComment(comment, { givenName, email });
    if (content === comment) {
      showSuccess('add comment succeeds');
    } else {
      showError('add comment failed.');
    }
    this.loadData();
  }

  render() {
    const { crime, comments, defaultVal } = this.state;
    const defaultValReminder = defaultVal ? (
      <h4>
        {
          'Note: These are the comments for the default crime. If you want to see comments of your interested crime, please go to '
        }
        <b>Home </b>
        page and click the icon on the Google Map
      </h4>
    ) : null;
    return (
      <div>
        <Row>
          <Col lg={3}>
            <h4>
              <b>Detailed Information:</b>
            </h4>
            <CrimeDashboard crime={crime} />
            <div className="col-4  pt-3 border-right">
              <h4>
                <b>Post your comment here</b>
              </h4>
              <CommentForm addComment={this.addComment} />
            </div>
          </Col>
          <Col lg={9}>
            {defaultValReminder}
            <div className="col-8  pt-3 bg-white">
              <CommentList comments={comments} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Discussion.contextType = UserContext;

const DiscussionWithToast = withToast(Discussion);
DiscussionWithToast.fetchData = Discussion.fetchData;

export default DiscussionWithToast;
