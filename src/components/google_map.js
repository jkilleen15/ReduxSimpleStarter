// is just component not container bc does not need to talk to Redux
// it is a functional component rather than class bc does not utilize state

import React, {Component} from 'react';
// we are wired to google api in index.html

class GoogleMap extends Component {
  // lifecycle method called automatically
  componentDidMount () {
    // creates embedded google map
    // googlemaps find the referenced elem, and puts a map there
    new google.maps.Map(this.refs.map, {
      // options object
      // 12 is good glimpse of city
      zoom: 12,
      // where we want to center map
      // we will create and send lat, long props
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render () {
    // this.refs.map
    return <div ref='map' />;
  }
}

export default GoogleMap;
