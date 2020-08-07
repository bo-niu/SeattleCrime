import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReportFilter from './ReportFilterTest.jsx';
import ReChart from './ReChart.jsx';
import graphQLFetch from './graphQLFetch.js';
import * as util from './util.js';
import store from './store.js';
import withToast from './withToast.jsx';

class Report extends React.Component {
  static async fetchData(match, search, showError) {
    const vars = util.getVarsFromReportURL(search);
    const inputVars = { input: vars };
    const query = `query getCrimeCountEveryYear($input: ReportInput!) {
      getCrimeCountEveryYear(input: $input) {
        count year
      }
    }`;
    const result = await graphQLFetch(query, inputVars, showError);
    // console.log('get countvsyear: ');
    // console.log(result);
    return result;
  }

  constructor(props) {
    super(props);
    const initialDate = store.initialData || { getCrimeCountEveryYear: null };
    this.state = {
      chartData: initialDate.getCrimeCountEveryYear,
    };
    this.state.filterDisabled = false;
    delete store.initialData;
  }

  componentDidMount() {
    const { chartData } = this.state;
    if (chartData == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      location: { search }, match, showError, showSuccess,
    } = this.props;
    this.setState({ filterDisabled: true });
    const data = await Report.fetchData(match, search, showError);
    if (data) {
      this.setState({ chartData: data.getCrimeCountEveryYear });
      showSuccess('Search succeeds.');
    }
    this.setState({ filterDisabled: false });
  }

  render() {
    const { chartData, filterDisabled } = this.state;
    // if (chartData === null || chartData === undefined) return null;
    return (
      <div>
        <Row>
          <Col lg={3}><ReportFilter disabled={filterDisabled} /></Col>
          {(chartData === null || chartData === undefined) ? ''
            : <Col lg={9}><ReChart data={chartData} /></Col>}
        </Row>
      </div>
    );
  }
}

export default withToast(Report);
