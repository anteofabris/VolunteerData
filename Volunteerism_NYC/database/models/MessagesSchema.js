const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const MessagesSchema = mongoose.Schema({
zip_code: Number,
title: String,
message: String,
score: Number,
date_created: Date


})

const Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;