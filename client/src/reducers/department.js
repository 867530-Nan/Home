const department = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SUB_DEPARTMENT':
      return [...state, action.department ];
    case 'ADD_VISIBLE_DEPARTMENTS':
      return action.departments
    default:
      return state;
  }
}

export default department;
