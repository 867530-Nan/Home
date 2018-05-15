import axios from 'axios';
import { setFlash } from '../actions/flash';

export const addEmployee = (single) => {
  return(dispatch) => {
    axios.post('/api/employees', single)
      .then( res => {
        dispatch({ type: 'ADD_SINGLE_EMPLOYEE', employee: res.data })
        dispatch(setFlash('Employee Added!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
}

export const deleteEmployee = (id) => {
  return(dispatch) => {
    axios.delete(`/api/employees/${id}`)
      .then( res => {
        dispatch({ type: "DELETE_EMPLOYEE", employee: id})
        dispatch(setFlash('Employee Deleted', 'success'))
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, "error"))
      })
  }
}