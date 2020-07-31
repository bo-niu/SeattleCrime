import React from "react";

class Discussion extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: ["textarea comments"],
    };
  }

  render() {
    return (
      <div className="form-group">
        <label discuss="commentbox">Comment</label>
        <textarea className="form-control" id="commentbox" rows="5" />
        <button style={{ margin: 10 }}>Add Comment</button>
        <div>
          {/* //function that will render the comments array and add validation */}
        </div>
      </div>
    );
  }
}

export default Discussion;
