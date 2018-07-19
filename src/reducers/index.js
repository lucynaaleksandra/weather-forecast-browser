import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  // responsible for weather part of our state
  weather: weatherReducer
})

export default rootReducer