const employees = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VISIBLE_EMPLOYEES':
      return action.employees
    case 'ADD_SINGLE_EMPLOYEE':
      return [...state, action.employee]
    default:
      return state;
  }
}

export default employees;
