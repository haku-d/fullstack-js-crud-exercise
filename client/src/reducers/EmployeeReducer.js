import client from 'client'

const defaultState = {
  rows: [],
  pages: null,
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'get_employees_started':
    case 'update_employee_start':
      return {
        ...state,
        loading: true
      }
    case 'get_employees_completed':
      return {
        ...state,
        rows: action.data.rows,
        pages: action.data.pages,
        loading: false
      }
    case 'update_employee_completed':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export const getEmployees = (filtered, sorted, page) => {
  const params = {
    page,
    filtered,
    sorted
  }

  return dispatch => {
    dispatch({ type: 'get_employees_started' })
    return client
      .get('/employees', params)
      .then(data => {
        dispatch({
          type: 'get_employees_completed',
          data: data
        })
      })
      .catch(err => {
        dispatch({
          type: 'get_employees_failed',
          data: err.toString()
        })
      })
  }
}

export const addEmployee = employee => {
  return dispatch => {
    dispatch({ type: 'add_employee_started' })
    return client
      .post('/employees', employee)
      .then(rs => {
        return dispatch({ type: 'add_employee_completed' })
      })
      .catch(err => {
        dispatch({ type: 'add_employee_failed', data: err.toString() })
      })
  }
}

export const updateEmployee = employee => {
  return dispatch => {
    dispatch({ type: 'update_employee_start' })
    return client
      .put(`/employees/${employee.id}`, employee)
      .then(rs => {
        return dispatch({ type: 'update_employee_completed' })
      })
      .catch(err => {
        dispatch({ type: 'update_employee_failed' })
      })
  }
}

export const deleteEmployee = id => {
  return dispatch => {
    dispatch({ type: 'delete_employee_start' })
    return client
      .delete(`/employees/${id}`)
      .then(rs => {
        return dispatch({ type: 'delete_employee_completed' })
      })
      .catch(err => {
        dispatch({ type: 'delete_employee_failed' })
      })
  }
}
