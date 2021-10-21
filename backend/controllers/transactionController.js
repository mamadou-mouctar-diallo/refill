// To import models from models/transaction
const transaction = require('../models/Transaction');
// To load bcryptjs
const bcrypt = require('bcryptjs');
// gravatar
const gravatar = require('gravatar')
// Load HTTP code status
const { HTTP_404, HTTP_200, HTTP_400 } = require('../config/httpCode');
// Load Json webToken
const jwt = require('jsonwebtoken');
// Load secret
const keys = require('../config/keys');
const validateAddtransactionInput = require('../validation/validateAddtransaction')
const validateLoginInput = require('../validation/login');
const Transaction = require('../models/Transaction');

// Function to get all transactions
function getTransactions(req, res){
  Transaction.find()
    .then(transaction => {
      if(transaction){
        return res.status(HTTP_200).json(transaction);
      }
      return res.status(HTTP_400).json({msg: "Sorry no transaction found"});
    })
    .catch(err => res.status(HTTP_400).json({msg: "Sorry no transaction found"}));
}
// To login 
function addTransaction(req, res){
  const { errors, isValid } = validateAddtransactionInput(req.body);
  if(!isValid){
    return res.status(HTTP_400).json(errors);
  }
  Transaction.findOne({ email: req.body.email})
    .then(transaction => {
          const onetransaction = {
          }
      })
}

// to delete a transaction
function deleteTransaction(req, res){
  Transaction.findOne({ id: req.params.id})
  .then(transaction => {
    if(transaction){
      Transaction.remove(transaction);
      res.status(HTTP_200).json({msg: "Transaction is removed successuf"})
    }
  })
}



module.exports = {
  getTransactions, 
  addTransaction, 
  deleteTransaction
};