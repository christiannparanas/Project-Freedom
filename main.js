
const _ = require('lodash');
const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose'); 

const app = express();


// middlewares 
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev')); 

// listen to localhost:3000
app.listen(3000)

// route
app.get('/', (req, res) => {
   res.render('home');
});