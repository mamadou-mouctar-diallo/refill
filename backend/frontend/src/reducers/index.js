import {combineReducers} from 'redux';
import authentificationReducer from './authentificationReducer';
import errorReducer from './errorReducer';


export default combineReducers({
  authentification: authentificationReducer,
  errors: errorReducer
});