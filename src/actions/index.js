import axios from 'axios';

const API_KEY = '0b3e70e540dcda6fcca7bfcd98142de4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// FORMAT: api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('request is: ', request);

  return {
    // action creators always return action
    // action always needs a type
    type: FETCH_WEATHER,
    payload: request
  };
}
