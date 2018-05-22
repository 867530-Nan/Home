import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import hotel from './Hotel'
import department from './department'
import employees from './employees'
import jobs from './jobs'
import expenses from './expenses'

const rootReducer = combineReducers({
  user,
  flash,
  hotel,
  department,
  employees,
  jobs,
  expenses
})

export default rootReducer
