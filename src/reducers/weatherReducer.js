import { FETCH_WEATHER } from '../actions/fetchWeather'

export default function weatherReducer(state = [], action) {
  console.log("action received action")
  switch(action.type) {
    case FETCH_WEATHER: 
      return [
        ...state,
        action.payload.data,
      ]
    default: 
      return state
    }
}
