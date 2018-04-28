import axios from 'axios'
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getHotel = (id) => {
  return(dispatch) => {
    axios.get(`/api/hotels/${id}`)
      .then( res => console.log("yoyoy" + res))
        // dispatch({ type: 'GET_HOTEL', hotel: res.data, headers: res.headers })
      .catch( res => {
        const message = res.response.data.errors.full_messages.join(',');
        dispatch(setFlash(message, 'error'));
      })
  }
}
