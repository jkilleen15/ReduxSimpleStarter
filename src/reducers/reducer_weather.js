// simple reducer takes action, console logs it
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // console.log('Action received:', action);
  switch (action.type) {
    // this is less brittle than using exported constant
    case FETCH_WEATHER:
    // don't mutate/manipulate the setState
    // using push would be mutating!
    // return a whole new array that includes old plus new!
      // return state.concat([action.payload.data]);
      // same thing, for ES6
      // insert new record at top or front of array!

      return [action.payload.data, ...state]; // [city, city, city] rather than [city], [city],
  }
  return state;
}
