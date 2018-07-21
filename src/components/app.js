import React from 'react'
import SearchBar from '../containers/searchBar'
import WeatherList from '../containers/weatherList'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
export default App