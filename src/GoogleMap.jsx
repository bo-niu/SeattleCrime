/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component {
  render() {
    const { crimes } = this.props;
    // console.log('crimes in google map:');
    // console.log(crimes);
    const multipleMarkers = (
      crimes.map((crime, i)=> (
        <Marker
          key = {i}
          lat={crime.Latitude}
          lng={crime.Longitude}
          // name={getCrimeDetail(crime)}
          // color="blue"
          crime={crime}
        />
      ))
    );
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0rYzImyIdiTBNNNLF_8bN1mruuoKhaMY', language: 'en' }}
          defaultCenter={{
            lat: 47.62,
            lng: -122.33,
          }}
          defaultZoom={12}
        >
          {multipleMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
