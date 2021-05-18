const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const OrgsSchema = mongoose.Schema({
org_name: String,
mission: String,
description: String,
website: String,
zip_code: Number,
NTA: String

})

const Orgs = mongoose.model('Orgs', OrgsSchema);

module.exports = Orgs;