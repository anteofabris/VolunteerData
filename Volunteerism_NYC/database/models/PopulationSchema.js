const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const PopulationSchema = mongoose.Schema({
  zip_code: Number,
  label: Number,
  ZCTA: Number,
  pop_est: Number
})

const Population = mongoose.model('Population', PopulationSchema);

module.exports = Population;