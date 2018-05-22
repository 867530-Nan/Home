const expenses = (state = [], action) => {
  switch(action.type) {
    case 'GET_EXPENSES': 
      return action.expenses;
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    default:
      return state;
  }
}

export default expenses;
