// To import models from models/User
const Operator = require('../models/Operator');
// Load HTTP code status
const { HTTP_404, HTTP_200, HTTP_400 } = require('../config/httpCode');
// Load Json webToken
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const validateAddOperator = require('../validation/validateAddOperator');

function getOperators(req, res){
  Operator.find()
    .then(operator => {
      if(operator){
        const operatorFound = []
        operator.map(value => {
          console.log(req.user.id)
          if(value.user == req.user.id){
            operatorFound.push( {
              id: value._id,
              name: value.name,
              codeColor: value.codeColor,
              authCode: value.authCode
            })
          }
        })
        
        console.log(operatorFound)
        return res.status(HTTP_200).json(operatorFound);
      }
      return res.status(HTTP_400).json({msg: "Sorry no operator found"});
    })
    .catch(err => res.status(HTTP_400).json({msg: "Sorry no operator found"}));
}
// To login 
function addOperator(req, res){
  const { errors, isValid } = validateAddOperator(req.body);
  if(!isValid){
    return res.status(HTTP_400).json(errors);
  }
  Operator.findOne({ name: req.body.name})
    .then(operator => {
      if(operator){
        errors.msg = 'Operator already exists';
        return res.status(HTTP_400).json(errors);
      }else{
          const oneOperator = {
            user: req.user.id,
            name: req.body.name,
            authCode: req.body.authCode,
            codeColor: req.body.codeColor,
          }
            const newOperator = new Operator(oneOperator);
            newOperator.save()
              .then((operator) => res.status(HTTP_200).json(operator))
              .catch(err => res.status(HTTP_404).json({err}))
          }
    });
}

// To get the current user
function getOneOperator(req, res){
  Operator.findOne({id: req.params.id})
  .then(operator => {
    console.log(operator)
     res.status(HTTP_200).json(operator)
  }).catch(err => res.status(HTTP_400).json({msg: "Sorry no operator"}))
}
// To update a user
function updateOperator(res){
  return res.status(200).json({msg: "Hello i updated an operator"});
}

function deleteOperators(req, res){
  Operator.find()
  .then(operator => {
    if(operator){
       operator.map(value => {
        if(value.user === req.user.id){
          Operator.remove(value)
        }
        res.status(HTTP_200).json({msg: "Operators deleted successfull"});
      })
    }

  }).catch(err => res.status(HTTP_400).json({msg: "Something went wrong"}))
}

function deleteOneOperator(req, res){
  Operator.findOne({ _id: req.params.id})
  .then(operator => {
    if(operator){
      Operator.remove({_id: req.params.id})
    }
    res.status(HTTP_200).json({msg: "Operator deleted successfull"}) ;
  }).catch(err => res.status(HTTP_400).json({msg:" Something went wrong"}));
}


module.exports = {getOperators, addOperator, updateOperator, getOneOperator, deleteOneOperator, deleteOperators};