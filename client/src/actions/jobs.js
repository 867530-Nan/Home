import axios from 'axios';
import { setFlash } from '../actions/flash';

export const addJob = (job, id) => {
  return(dispatch) => {
    axios.post(`/api/departments/${id}/jobs`, {job: job})
      .then( res => {
        dispatch({ type: 'ADD_JOB', job: res.data })
        dispatch(setFlash('Employee Added!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
  
}