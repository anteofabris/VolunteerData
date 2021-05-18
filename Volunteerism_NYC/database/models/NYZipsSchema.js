const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const NYZipsSchema = mongoose.Schema({
zip: Number,
city: String,
state_id: String,
state_name: String,
population: Number,
county_name: String,
density: Number




})

const NYZips = mongoose.model( 'NYZips', NYZipsSchema);

module.exports = NYZips;