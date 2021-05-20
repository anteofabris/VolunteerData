const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const CommentsSchema = mongoose.Schema({
  message_id: String,
  zip_code: Number,
  comment: String,
  score: Number,
  date_created: Date
})

const Comments = mongoose.model( 'Comments' , CommentsSchema);

module.exports = Comments;