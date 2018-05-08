import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import hotel from './Hotel'
import department from './department'
import employees from './employees'
import jobs from './jobs'

const rootReducer = combineReducers({
  user,
  flash,
  hotel,
  department,
  employees,
  jobs
})

export default rootReducer
