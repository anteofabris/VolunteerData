const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const CoordsSchema = mongoose.Schema({
zip_code: Number,
population: Number,
total_volunteers: Number,
percent_volunteers: Number,
median_income: Number,
score: Number

})

const Coords = mongoose.model('Coords', CoordsSchema);

module.exports = Coords;