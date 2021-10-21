const express = require('express');
const router = express.Router();
const transactionsControllers = require('../controllers/transactionController');



router.get('/transaction_id', (req, res) => transactionsControllers.getTransactions(req, res));








module.exports =  router;