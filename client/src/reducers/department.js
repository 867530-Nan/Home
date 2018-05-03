const department = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SUB_DEPARTMENT':
      return [...state, action.department ];
    default:
      return state;
  }
}

export default department;
