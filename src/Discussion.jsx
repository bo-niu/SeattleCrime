import React from "react";

class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comments: event.target.value });
  }

  handleSubmit(event) {
    alert("A comment was submitted " + this.state.value);
    event.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label discuss="commentbox">Comment</label>
          <textarea
            className="form-control"
            id="commentbox"
            rows="5"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button style={{ margin: 10 }}>Add Comment</button>
        </div>
      </form>
    );
  }
}

function isFormValid() {
  return this.state.value.message !== "";
}

export default Discussion;
