import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7dG3Q5kh-7GYu7_KCOabeLy8ZwcdVnMk', language: 'en' }}
          defaultCenter={{
            lat: 47.62,
            lng: -122.33,
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={47.955413}
            lng={-122.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
