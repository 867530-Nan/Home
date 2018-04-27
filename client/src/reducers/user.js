const user = (state = {}, action ) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...action.user }
    case 'LOGOUT':
      return {}
    case 'SET_USER_EMPLOYEE':
      return {...state, employee: action.employee}

    default:
      return state;
  }
}

export default user;
