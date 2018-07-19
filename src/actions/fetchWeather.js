import axios from 'axios'


const API_KEY = process.env.API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// action creator
export function fetchWeather(city) {
  // final url string 
  const url = `${ROOT_URL}&q=${city},us`
  // ajax request using axios - axios returns a promise
  const request = axios.get(url)

  console.log("Request: ", request)

  return {
    type: FETCH_WEATHER,
    // returning a promise as a payload
    payload: request,
  }
}