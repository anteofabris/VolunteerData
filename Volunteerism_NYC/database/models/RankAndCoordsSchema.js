const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const RankAndCoordsSchema = mongoose.Schema({
zip_code: Number,
population: Number,
total_volunteers: Number,
percent_volunteers: Number,
median_income: Number,
score: Number,
geometry: {}

})

const RankAndCoords = mongoose.model('RankAndCoords', RankAndCoordsSchema);

module.exports = RankAndCoords;