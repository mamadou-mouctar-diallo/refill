import axios from "axios";
import setAuthorizationToken from "../help/setAuthorizationToken";
import jwt_decode from "jwt-decode";

import {
  DELETE_OPERATOR,
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_OPERATOR,
  UPDATE_OPERATOR,
} from "./types";

// Register a user
export const addUSer = (userData, history) => (dispatch) => {
  axios
    .post("/api/views/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// To login
export const loginUSer = (userData) => (dispatch) => {
  axios
    .post("/api/views/users/login", userData)
    .then((res) => {
      // To save in localStorage
      const { token } = res.data;
      // Set the token to localStorage
      localStorage.setItem("jwtToken", token);
      // To set the token to authorization header
      setAuthorizationToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set the current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// log user out

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export const setOperator = (operator) => {
  return {
    type: SET_OPERATOR,
    payload: operator,
  };
};

export const getOperator = (idOperator) => (dispatch) => {
  axios
    .get("/api/views/operators/:id", idOperator)
    .then((res) => {
      const { op } = res.data;
      localStorage.setItem("id", op.id);
      localStorage.setItem("name", op.name);
      localStorage.setItem("color", op.color);

      dispatch(setOperator(op));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const addOperator = (operatorData, history) => (dispatch) => {
  axios
    .post("/api/views/operators/add", operatorData)
    .then((res) => {
      dispatch({
        type: SET_OPERATOR,
        payload: { msg: "Operator added successfull" },
      });
      history.push("/gofast");
    })
    .then((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const deleteOperator = (id) => (dispatch) => {
  axios
    .delete("/api/views/operators/:id", id)
    .then((res) => {
      dispatch({
        type: DELETE_OPERATOR,
        payload: { msg: "Operator deleted successfull" },
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const updateOperator = (id, history) => (dispatch) => {
  axios
    .get("/api/views/operators/:id", id)
    .then((res) => {
      addOperator(res.data);
      dispatch({
        type: UPDATE_OPERATOR,
        payload: { msg: "Operator updated successfull" },
      });
      history.push("/gofast");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
