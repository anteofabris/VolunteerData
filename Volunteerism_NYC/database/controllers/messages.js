const Messages = require('../models/MessagesSchema.js');

exports.getAll = (zip, callback) => {
  Messages.find({zip_code: Number(zip)}).sort({score: 1})
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    console.log('error in Messages.find: ', err)
  })

}

exports.addMessage = (message, callback) => {
  console.log('this is message: ', message)

  Messages.create({
    zip_code: message.zip_code,
    title: message.title,
    message: message.message,
    score: message.score,
    date_created: message.date
  })
  .then(() => {
    console.log('saved to db!')
    callback(null)
  })

}