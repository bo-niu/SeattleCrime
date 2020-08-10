import React, { Component } from 'react';
import UserContext from '../UserContext.js';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',

      comment: {
        name: '',
        message: '',
      },
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: 'All fields are required.' });
      return;
    }

    // loading status and clear error
    this.setState({ error: '' });
    const { addComment } = this.props;
    // persist the comments on server
    const { comment: { message } } = this.state;
    addComment(message);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange(event) {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    // return this.state.comment.name !== '' && this.state.comment.message !== '';
    return this.state.comment.message !== '';
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    const { signedIn } = this.context;
    const emoji = String.fromCodePoint(0x1F449);
    const buttonString = signedIn ? `Comment ${emoji}` : 'Please Sign In';
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            {/* <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="😎 Your Name"
              name="name"
              type="text"
            /> */}
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="🤬 Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading || !signedIn} className="btn btn-primary">
              {buttonString}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

CommentForm.contextType = UserContext;

export default CommentForm;
