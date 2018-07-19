import './index.scss'

import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStoreWithMiddleware from './store'
import App from './components/App'
import rootReducer from "./reducers/index"


ReactDOM.render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
), document.getElementById("root"))
