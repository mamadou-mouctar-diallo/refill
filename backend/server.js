const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./views/users')
const transactions = require('./views/transactions')
const operators = require('./views/operators')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const db = require('./config/keys').mongodbURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
//Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
app.use('/api/views/users/', users);
app.use('/api/views/transactions/', transactions);
app.use('/api/views/operators/', operators);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server running on port", PORT));