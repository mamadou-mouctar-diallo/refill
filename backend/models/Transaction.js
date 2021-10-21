const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema
const TransactionSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  telephone:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  },
  card:{
      cardNumer:{
        type: Number,
      required: false
      },
      datelimit:{
        type: Date,
        required: false
      },
      crytograme:{
        type: Number,
        required: false
      }
    },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Transaction = mongoose.model('transactions', TransactionSchema);