import { createStore, applyMiddleware } from "redux"
// import thunk from "redux-thunk"
// import logger from "redux-logger"
import ReduxPromise from 'redux-promise'
// import rootReducer from "./reducers/index"


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk, logger)
// )

export default createStoreWithMiddleware