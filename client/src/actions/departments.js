import axios from 'axios';
import { setFlash } from '../actions/flash';

export const addDepartment = (department, id) => {
  return(dispatch) => {
    axios.post(`/api/departments`, {department: department})
      .then( res => {
        dispatch({ type: 'ADD_JOB', job: res.data })
        dispatch(setFlash('Department Added!', 'success'));
      })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
  
}

export const addVisibleSubDepartment = (department) => {
  return({ type: 'ADD_VISIBLE_SUB_DEPARTMENT', department: department })
}