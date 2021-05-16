const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/volunteerism'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useNewUnifiedTopology: true,
  useCreateIndex: true
})