const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema);