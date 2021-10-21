import axios from "axios";
import setAuthorizationToken from '../help/setAuthorizationToken';
import jwt_decode from 'jwt-decode';

import {GET_ERRORS, SET_CURRENT_USER} from './types'

// Register a user
export const addUSer = (userData, history) => dispatch =>{
  axios.post('/api/views/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    )
}

// To login 
export const loginUSer = (userData) => dispatch =>{
  axios
  .post('/api/views/users/login', userData)
  .then(res => {
      // To save in localStorage
      const {token} = res.data
      // Set the token to localStorage
      localStorage.setItem('jwtToken', token);
      // To set the token to authorization header
      setAuthorizationToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set the current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    )
}

// Set logged in user
export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// log user out

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
}