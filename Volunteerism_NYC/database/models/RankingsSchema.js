const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const RankingsSchema = mongoose.Schema({
zip_code: Number,
population: Number,
total_volunteers: Number,
percent_volunteers: Number,
median_income: Number,
score: Number

})

const Rankings = mongoose.model('Rankings', RankingsSchema);

module.exports = Rankings;