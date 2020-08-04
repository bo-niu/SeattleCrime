/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withRouter } from 'react-router-dom';

function getImage(type) {
  // console.log(`type: ${type}`);
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

function getCrimeDetail(crime) {
  return `
  Offense Type: ${crime.OffenseType}\n
  Offense Description: ${crime.OffenseDescription}\n
  Report Date: ${crime.ReportDate}\n
  Offense Start Date: ${crime.OffenseStartDate}\n
  Offense End Date: ${crime.OffenseEndDate}\n
  Block: ${crime.Block}\n
  District: ${crime.District}\n
  Beat: ${crime.Beat}\n
  2000 Census Tract: ${crime.CensusTract}\n
  Longitude: ${crime.Longitude}\n
  Latitude: ${crime.Latitude}
  `;
}

class Marker extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { history, crime } = this.props;
    // eslint-disable-next-line no-underscore-dangle
    history.push({ pathname: `discussion/${crime._id}` });
  }

  render() {
    const { crime } = this.props;
    return (
      <div
        className="marker"
        // style={{ backgroundColor: color, cursor: 'pointer' }}
        style={{ backgroundImage: getImage(crime.OffenseType), cursor: 'pointer' }}
        title={getCrimeDetail(crime)}
        role="button"
        onClick={this.onClick}
      />
    );
  }
}

export default withRouter(Marker);
