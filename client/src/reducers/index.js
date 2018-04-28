import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import hotel from './Hotel'

const rootReducer = combineReducers({
  user,
  flash,
  hotel
})

export default rootReducer
