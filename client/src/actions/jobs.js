import axios from 'axios';
import { setFlash } from '../actions/flash';

export const addJob = (job, id) => {
  return(dispatch) => {
    axios.post(`/api/departments/${id}/jobs`, {job: job})
      .then( res => {
        dispatch({ type: 'ADD_JOB', job: res.data })
        dispatch(setFlash('Job Added!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
  
}
export const updateJob = (single, id) => {
  return(dispatch) => {
    axios.put(`/api/departments/${id}/jobs/${single.id}`, single)
      .then( res => {
        dispatch(setFlash('Job Deleted!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
}

export const destroyJob = (department, job) => {
  console.log(department)
  return(dispatch) => {
    axios.delete(`/api/departments/${department}/jobs/${job}`)
      .then( res => {
        dispatch(setFlash('Job Deleted!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
}