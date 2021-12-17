import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import "./MapContainer.css";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        className="maps"
        initialCenter={{ lat: 42.63612256076243, lng: 23.36976168577798 }}
      >
        <Marker position={{ lat: 42.63612256076243, lng: 23.36976168577798 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4jmmrgxZ7Q0xYAW2tr0BrA3Ejrna1Fo4",
})(MapContainer);
