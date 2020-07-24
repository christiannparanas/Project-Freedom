
const _ = require('lodash');
const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose'); 

const app = express();

// post model
const Post = require('./models/posts')

const dbURI = 'mongodb+srv://christian:thea1718@freedom.dpkct.mongodb.net/wall?retryWrites=true&w=majority';


// connect to mongo using mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) 
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err))


// middlewares 
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev')); 

// listen to localhost:3000
app.listen(process.env.PORT || 3000)


// route
app.get('/', (req, res) => {

   Post.find().sort({ createdAt: -1 })
   .then((result) => {

      res.render('home', { posts: result })
   })
   .catch((err) => {
      console.log(err)
   })
});

// add post
app.post('/', (req, res) => {
   const post = new Post( req.body )

   // save it in db
   post.save()
      .then((result) => {
         res.redirect('/')
      })
      .catch((err) => {
         console.log(err)
      })
});
