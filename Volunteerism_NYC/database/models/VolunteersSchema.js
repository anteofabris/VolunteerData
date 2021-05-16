const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const VolunteersSchema = mongoose.Schema({
  org_name: String,
  address: String,
  city: String,
  state: String,
  zip_code: Number,
  year_surveyed: Number,
  total_volunteers: Number,
  youth_volunteers: Number,
  adult_volunteers: Number,
  older_adult_volunteers: Number,
  org_type: String,
  interest_areas: String,
  boroughs_served: String,
  special_populations_served: String,
  borough: String,
  latitude: Number,
  longitude: Number,
  community_board: Number,
  council_district: Number,
  census_tract: Number,
  BIN: Number,
  BBL: Date, // check this
  NTA: String

})

const Volunteers = mongoose.model('Volunteers', VolunteersSchema);

module.exports = Volunteers;