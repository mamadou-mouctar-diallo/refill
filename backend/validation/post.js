const Validator = require('validator');
const isEmpty = require('./empty')
module.exports = function validatePostInput(data){
  let errors = {};
  data.text = !isEmpty(data.text) ? '' : data.text;
  data.password = !isEmpty(data.password) ? '': data.password ;

  if(!Validator.isLength(data.text, {min: 10, max: 300})){
    errors.text = 'Text must be between 10 and 300 characteres'
  }
  if(Validator.isEmpty(data.text)){
    errors.text = 'Text field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}