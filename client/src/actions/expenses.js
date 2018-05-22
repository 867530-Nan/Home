import axios from 'axios'
import { setHeaders } from './headers';
import { setFlash } from './flash';

      
const testExpenses = [
  {name: 'Guest Amenities', id: 701010, amount: 1598, department: "Front Desk"},
  {name: 'Guest Newspapers', id: 701510, amount: 215, department: "Front Desk"},
  {name: 'Printing Supplies', id: 706010, amount: 0, department: "Management"},
  {name: 'Reservation & TA Fees', id: 708010, amount: 10166, department: "Conciege"},
  {name: 'Guest Transportation', id: 709010, amount: 1666, department: "Bellman"},
  {name: 'Guest Walk Expense', id: 709510, amount: 0, department: "Bellman"},
  {name: 'Uniform Costs', id: 709910, amount: 22, department: "Night Audit"},
  {name: 'Sundries, Resale Items', id: 710010, amount: 393, department: "Night Audit"},
]

export const getExpenses = () => {
  return(dispatch) => {
    //replace URL below
    axios.get('/api/hotels/1')
      .then(
        // replace testExpenses with legit response
        dispatch({ type: 'GET_EXPENSES', expenses: testExpenses})
      )
      .catch( res => {
        // const message = res.response.data.errors.full_messages.join(',');
        // dispatch(setFlash(message, 'error'));
        console.log(res)
      })
  }
}

export const appendExpense = (single) => {
  return(dispatch) => {
    dispatch({ type: 'ADD_EXPENSE', expense: single })
  }
}