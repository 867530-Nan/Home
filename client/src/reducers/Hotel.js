const hotel = (state = {}, action) => {
  switch(action.type) {
    case 'GET_HOTEL':
      return { hotel: action.id };
    default:
      return state;
  }
}

export default hotel;
