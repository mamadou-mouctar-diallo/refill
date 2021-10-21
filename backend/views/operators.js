const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operatorController');
const passport = require('passport');

// Router to get all users in data base
router.get('/',passport.authenticate('jwt', {session: false}), (req, res) => operatorController.getOperators(req, res));

// Router to get the current user
router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => operatorController.getOneOperator(req, res));

// Router to add a user
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res) => operatorController.addOperator(req, res));

// Router to login
router.delete('/',passport.authenticate('jwt', {session: false}), (req, res) => operatorController.deleteOperators(req, res));

// Router to upadate a user
router.put('/update/:id',passport.authenticate('jwt', {session: false}), (req, res) => operatorController.updateOperator(req, res));

// Router to delete a user
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => operatorController.deleteOneOperator(req, res));


module.exports = router;