const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// instance in a Schema obj
const postSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   msg: {
      type: String,
      required: true
   },

}, { timestamps: true });

// model
const Post = mongoose.model('Post', postSchema);

// export it
module.exports = Post;