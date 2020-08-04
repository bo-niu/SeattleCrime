import React from 'react';

function getImage(type) {
  console.log(`type: ${type}`);
  switch (type) {
    case 'TRESPASS':
    case 'BIKE THEFT':
    case 'ROBBERY':
    case 'NARCOTICS':
    case 'DISTURBANCE':
    case 'SHOPLIFTING':
    case 'THREATS':
    case 'STOLEN PROPERTY':
    case 'WARRANT ARREST':
    case 'FRAUD':
    case 'ASSAULT':
    case 'VEHICLE THEFT':
    case 'PROPERTY DAMAGE':
    case 'BURGLARY':
    case 'CAR PROWL':
      return `url("/markers/${type}.png")`;
    default:
      return 'url("/markers/OTHER.png")';
  }
}


class Marker extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('marker clicked');
  }

  render() {
    const { crime: { OffenseDescription } } = this.props;
    return (
      <div
        className="marker"
        // style={{ backgroundColor: color, cursor: 'pointer' }}
        style={{ backgroundImage: getImage(OffenseDescription), cursor: 'pointer' }}
        title={`Offense Type: ${OffenseDescription}`}
        role="button"
        onClick={this.onClick}
      />
    );
  }
}

export default Marker;
