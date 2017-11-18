import React, {Component} from 'react';
import {connect} from 'react-redux';
// npm i --save react-sparklines@1.6.0
// import {Sparklines, SparklinesLine} from 'react-sparklines'; // moved to chart.js
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name;
    // refer to API data, this is array(list elem) of weather data, by time increment
    const temps = cityData.list.map(weather => weather.main.temp)
    // For Celcius (C), then change units!
      // let temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    // console.log(temps)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    // find coord object, pull 2 properties, assign to new variables lon and lat
    const {lon, lat} = cityData.city.coord;

    /*
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    */

    return (
      <tr key={name} >
        <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color='orange' units='K' /></td>
          <td><Chart data={pressures} color='green' units='hPa'/></td>
          <td><Chart data={humidities} color='black' units='%' /></td>
      </tr>
    );
  }
  render () {
    return (
      <table className='table table-hover'>
        <thead>

          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// // same as const weather = state.weather
function mapStateToProps ({weather}) {
  return {weather}; // shrunk because same name {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);

/*
function mapStateToProps(state){
  return {weather: state.weather}
}
*/
