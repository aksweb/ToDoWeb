// app.js

const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bcrypt = require('bcrypt')
const saltRounds = process.env.SALTROUND

const app = express();

// Importing Controllers
const todoController = require('./controllers/todoController');
const signupController = require('./controllers/signupController');
// const { default: SignUp } = require('../SignUp/Signup');

// Connecting to Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
    .catch(console.error);

app.use(express.json());
app.use(cors());

// // Routes
app.use('/', todoController);
app.use('/user', signupController);


app.listen(3001, () => (console.log("Server started")));