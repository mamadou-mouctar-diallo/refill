const Validator = require('validator');
const isEmpty = require('./empty')
module.exports = function validateAddOperator(data){
  let errors = {};

  data.name = isEmpty(data.name) ? data.name : '';
  data.codeColor = isEmpty(data.codeColor) ? data.codeColor : '';
  data.authCode = isEmpty(data.authCode) ? data.authCode : '';
  if(Validator.isEmpty(data.name,)){
    errors.name = 'Name field is required';
  }
  if(Validator.isEmpty(data.codeColor)){
    errors.codeColor = 'You must choose a color';
  }
  if(Validator.isEmpty(data.authCode)){
    errors.authCode = 'Activation code field is required';
  }
  if(!Validator.isInt(data.authCode)){
    errors.authCode = 'Activation code is invalid';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}