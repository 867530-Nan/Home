import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import hotel from './Hotel'
import department from './department'
import employees from './employees'

const rootReducer = combineReducers({
  user,
  flash,
  hotel,
  department,
  employees,
})

export default rootReducer
