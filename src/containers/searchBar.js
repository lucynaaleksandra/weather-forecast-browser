import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchWeather from '../actions/fetchWeather'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    // fetch weather data
    this.props.fetchWeather(this.state.term)
    // clear search input
    this.setState({ term: '' })
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className='input-group'>
        <input
          className='form-control'
          placeholder='Get a five-day forecast in your favorite cities'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn tbn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)



// controlled field: a form elem where the value of an input is set by the state of the component (not redux level stata). You need to set your state whenever the input changes. 

// when form elem used - press enter to submit - use onSubmit on form elem

// mapDispatchToProps is always passed into connect as a 2nd argument

// 5:13