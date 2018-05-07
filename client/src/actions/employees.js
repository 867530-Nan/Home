import axios from 'axios';
import { setFlash } from '../actions/flash';

export const addEmployee = (single, id) => {

  return(dispatch) => {
    axios.post(`/api/departments/${id}/jobs.json`, {job: single})
      .then( res => {
        debugger
        return({ type: 'ADD_SINGLE_EMPLOYEE', employee: res.data })
        dispatch(setFlash('Employee Added!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
}