const ZipPaths = require('../models/ZipPathsSchema.js');

exports.getPaths = (callback) => {

  ZipPaths.find()
  .then((response) => {
    // console.log('got our response in getRankedList: ', response)
    callback(null, response)
  })
  .catch((err) => {
    console.log('error in Rankings.find: ', err)
  })

}