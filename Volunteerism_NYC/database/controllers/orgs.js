const Orgs = require('../models/OrgsSchema.js');

exports.getAll = (zip, callback) => {
  Orgs.find({zip_code: zip})
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    console.log('error in Orgs.find: ', err)
  })
}