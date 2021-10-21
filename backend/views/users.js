const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const passport = require('passport');
// Router to get all users in data base
router.get('/', (req, res) => userController.getUsers(res));

// Router to get the current user
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => userController.getCurrentUser(req, res));

// Router to add a user
router.post('/register', (req, res) => userController.addUser(req, res));

// Router to login
router.post('/login', (req, res) => userController.login(req, res));

// Router to upadate a user
router.put('/update', (req, res) => userController.updateUser(res));

// Router to delete a user
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => userController.deleteUser(req, res));





module.exports =  router;