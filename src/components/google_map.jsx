import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';



class GoogleMap extends Component {
  render() {
    const center = this.props.lat && this.props.lng
      ? { lat: this.props.lat, lng: this.props.lng }
      : GoogleMap.defaultProps.center;

console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={center}
          defaultZoom={GoogleMap.defaultProps.zoom}
        >
          {this.props.lat && this.props.lng &&
            <Marker lat={this.props.lat} lng={this.props.lng} />}
        </GoogleMapReact>
      </div>
    );
  }
}



GoogleMap.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};


export default GoogleMap;
