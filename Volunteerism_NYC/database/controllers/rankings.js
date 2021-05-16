const Rankings = require('../models/RankingsSchema.js');

exports.getRankedList = (callback) => {

  Rankings.find().sort({score: 1})
  .then((response) => {
    console.log('got our response in getRankedList: ', response)
    callback(null, response)
  })
  .catch((err) => {
    console.log('error in Rankings.find: ', err)
  })

}