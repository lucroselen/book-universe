import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 42.63612256076243, lng: 23.36976168577798 }}
      >
        <Marker position={{ lat: 42.63612256076243, lng: 23.36976168577798 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClWYFvzRH9iZ_4ZHqR7RIJyVpZvOy4w2c",
})(MapContainer);
