const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const ZipPathsSchema = mongoose.Schema({
zip_code: Number,
zipPath: String,
city: String,
state_id: String,
state_name: String,
population: Number,
county_name: String,
density: Number


})

const ZipPaths = mongoose.model('ZipPaths', ZipPathsSchema);

module.exports = ZipPaths;