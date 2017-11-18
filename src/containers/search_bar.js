import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

//export default class SearchBar extends Component {


export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

// this (instance of search bar) has a function called onInputChange
// bind that function to this (SearchBar)
// replace onInputChange with this new bound instance of function
// take existing, bind to this, replace with new bound instance
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    // don't automatically submit when user hits enter wthin search or hits submit
    event.preventDefault();


    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render () {
    return (
      <form
        className='input-group'
        onSubmit={this.onFormSubmit} >
        <input
          placeholder='get a 5 day forcast in your favorites cities!'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit!</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
