const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema
const OperatorSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name:{
    type: String,
    required: true
  },
  codeColor:{
    type: String,
    required: true
  },
  authCode:{
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Operator = mongoose.model('operator', OperatorSchema);