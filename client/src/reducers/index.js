import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import hotel from './Hotel'
import department from './department'

const rootReducer = combineReducers({
  user,
  flash,
  hotel,
  department
})

export default rootReducer
