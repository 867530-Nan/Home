const employees = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VISIBLE_EMPLOYEES':
      return action.employees
    default:
      return state;
  }
}

export default employees;
