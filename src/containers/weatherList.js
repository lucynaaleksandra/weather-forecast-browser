import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'


class WeatherList extends Component {

  // generates single city/row
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    // console.log(temps)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color='orange' units='K' /></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='black' units='%' /></td>
      </tr>
    )
  }

  render() {
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
    )
  }
}

function mapStateToProps({ weather }) {
  // we assigned weather reducer to weather key in rootReducer
  return { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)