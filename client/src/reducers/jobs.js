const jobs = (state = [], action) => {
  switch(action.type) {
    case 'GET_JOBS': 
      return action.jobs
    case 'ADD_JOB':
      return [...state, action.job ];
    case 'UPDATE_JOBS': 
    return state.map( job => {
      if(job.id === action.job.id)
        return action.job
      return job
    })
    case 'DELETE_JOB':
      return state.filter( job => job.id !== action.job)
    default:
      return state;
  }
}

export default jobs;
