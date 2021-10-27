import { isEmpty } from "../validation/isEmpty";
import {
  DELETE_OPERATOR,
  GET_OPERATOR,
  SET_CURRENT_USER,
  SET_OPERATOR,
  UPDATE_OPERATOR,
} from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: {},
  operator: {},
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_OPERATOR:
      return {
        ...state,
        operator: action.payload,
      };
    case SET_OPERATOR:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_OPERATOR:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_OPERATOR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
