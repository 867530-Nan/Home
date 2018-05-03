export const addJob = (job) => {
  return({ type: 'ADD_JOB', job: job })
}