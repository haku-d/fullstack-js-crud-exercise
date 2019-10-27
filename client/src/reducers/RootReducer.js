import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import EmployeeReducer from './EmployeeReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    employee: EmployeeReducer
  })
