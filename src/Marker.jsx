import React from 'react';

class Marker extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('marker clicked');
  }

  render() {
    const { color, name, id } = this.props;
    return (
      <div
        className="marker"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
        role="button"
        onClick={this.onClick}
      />
    );
  }
}

export default Marker;
