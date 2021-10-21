// To import models from models/User
const User = require('../models/User');
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
const validateAddUserInput = require('../validation/validateAddUser')
const validateLoginInput = require('../validation/login')

// Function to get all users
function getUsers(res){
  User.find()
    .then(user => {
      if(user){
        const userFound = []
        user.map(value => {
          userFound.push( {
            name: value.name,
            email: value.email
          })
        })
        return res.status(HTTP_200).json(userFound);
      }
      return res.status(HTTP_400).json({msg: "Sorry no user found"});
    })
    .catch(err => res.status(HTTP_400).json({msg: "Sorry no user found"}));
}
// To login 
function addUser(req, res){
  const { errors, isValid } = validateAddUserInput(req.body);
  if(!isValid){
    return res.status(HTTP_400).json(errors);
  }
  User.findOne({ email: req.body.email})
    .then(user => {
      if(user){
        errors.msg = 'Email already exists';
        return res.status(HTTP_400).json(errors);
      }else{
        
        const avatar = gravatar.url(
          req.body.email,
          {
          s: HTTP_200, // Size
          r: 'pg', // Rating
          d: 'mm' // Default
          });
          const oneUser = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            avatar,
            password: req.body.password,
          }
        const newUser = new User(oneUser);
        bcrypt.genSalt(10, (err, salt) => {
          // console.log(salt);
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // console.log(hash);
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then((user) => res.status(HTTP_200).json(user))
              .catch(err => res.status(HTTP_404).json({err}))
          });
        });
      }
    });
}
// To add a user
function login(req, res){
  const email = req.body.email;
  const password = req.body.password;
  const {errors, isValid } = validateLoginInput(req.body);

  if(!isValid){
    return res.status(HTTP_400).json(errors)
  }
  //Find user by email
  User.findOne({email})
    .then(user => {
      //Check for user
      if(!user){
        errors.msg = 'User not found';
        return res.status(HTTP_404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch){
            //user Matched
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              avatar: user.avatar
            }
            // Sign Token
            jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600 }, (err, token) => {
                res.json({
                  succes: true,
                  token: 'Bearer ' +  token
                });
              });
          }else{
            errors.msg = 'Password incorrect';
            return res.status(HTTP_400).json(errors);
          }
        });
    });

}
// To get the current user
function getCurrentUser(req, res){
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone
    });
}
// To update a user
function updateUser(res){
  return res.status(200).json({msg: "Hello i updated a user"});
}
// to delete a user
function deleteUser(req, res){
  User.findOne({ _id: req.params.id})
  .then(user => {
    if(user){
      User.remove(user);
      res.status(HTTP_200).json({msg: "User deleted successfull"})
    }
  })
}



module.exports = {getUsers, addUser, login, updateUser, getCurrentUser, deleteUser};