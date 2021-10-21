const Validator = require('validator');
const isEmpty = require('./empty')
module.exports = function validateAddtransaction(data){
  let errors = {};

  data.phone = isEmpty(data.phone) ? data.phone : '';
  data.cardNumber = isEmpty(data.cardNumber) ? data.cardNumber : '';
  data.datelimit = isEmpty(data.datelimit) ? data.datelimit : '';
  data.cryptograme = isEmpty(data.cryptograme) ? data.cryptograme : '';
  if(!Validator.isLength(data.phone, { min: 6, maxi: 16})){
    errors.phone = 'Phone field must be min 6 digits and max 16 digits';
  }
  if(Validator.isInt(data.phone)){
    errors.phone = 'Phone field is required';
  }
  if(!Validator.isLength(data.cardNumber, { min: 6, maxi: 16})){
    errors.cardNumber = 'Card Number must be  16 digits';
  }
  if(Validator.isInt(data.cardNumber)){
    errors.cardNumber = 'Card number field is required';
  }
  if(!Validator.isDate(data.datelimit)){
    errors.datelimit = 'Date limit must be date';
  }
  if(Validator.isEmpty(data.datelimit.toString())){
    errors.datelimit = 'Date limit field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}