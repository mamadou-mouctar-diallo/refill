const Validator = require('validator');
const isEmpty = require('./empty')
module.exports = function validateAddUserInput(data){
  let errors = {};

  data.name = isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? '' : data.email;
  data.phone = isEmpty(data.phone) ? data.phone : '';
  data.password = isEmpty(data.password) ? data.password : '';
  data.password2 = isEmpty(data.password) ? data.password2 : '';
 
  if(Validator.isEmpty(data.name)){
    errors.name = 'Name field is required';
  }else if(!Validator.isLength(data.name, { min: 2, maxi: 30})){
    errors.name = 'Name must be between 2 and 30 characters';
  }
  if(Validator.isEmpty(data.email)){
    errors.email = 'email field is required';
  }else if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid'
  }
  if(Validator.isEmpty(data.phone)){
    errors.phone = 'Phone field is required'
  }else if(!Validator.isInt(data.phone)){
    errors.phone = 'Phone is invalid'
  }
  if(!Validator.isLength(data.password, { min: 6, maxi: 30})){
    errors.password = 'Password must be at least 6 characters';
  }
  if(Validator.isEmpty(data.password)){
    errors.password = 'Password field is required';
  }
  if(Validator.isEmpty(data.password2)){
    errors.password2 = 'Confirm password field is required';
  }
  if(!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}