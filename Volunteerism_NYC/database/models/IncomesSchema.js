const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const IncomesSchema = mongoose.Schema({
NAME: String,
S1901_C01_012E: Number

})

const Incomes = mongoose.model('Incomes', IncomesSchema);

module.exports = Incomes;