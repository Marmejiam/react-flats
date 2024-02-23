require('dotenv').config();

import React, { Component } from 'react';
import GoogleMap from "./google_map";

import flats from '../data/flats';
import FlatsList from './flats_list';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lng: "",
      flats
    }

  }

  selectedFlat = (lat, lng) => {
    console.log(lat,lng);
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  render() {
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    return (
      <div>
        <FlatsList flats={this.state.flats} selectedFlatFormul={this.selectedFlat} />
        <div className="map-container">
          <GoogleMap lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    );
  }

}

export default App;
