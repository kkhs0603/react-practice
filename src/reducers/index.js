import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import textReducer from './textReducer'

export default combineReducers({
  counterReducer,
  textReducer
})

