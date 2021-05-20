const Messages = require('../models/MessagesSchema.js');

exports.getAll = (zip, callback) => {
  Messages.find({ zip_code: Number(zip) }).sort({ score: -1, date_created: -1 })
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
      console.log('error in Messages.find: ', err)
    })

}

exports.getLeaderboard = (callback) => {
  Messages.find().sort({ score: -1 }).limit(5)
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
      console.log('err getting from messages for leaderboard: ', err)
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
    .catch((err) => {
      console.log('error saving to db: ', err)
    })

}

exports.findTopTitle = (zip, callback) => {

  if (!zip) {
    return callback(err)
  }

  Messages.find({ zip_code: Number(zip) }).sort({ score: -1, date_created: -1 }).limit(1)
    .then((response) => {
      //console.log('found top title! ', response[0].title)
      if (response.length > 0) {
        callback(null, response[0].title)
      } else {
        callback(null, response)
      }
    })
    .catch((err) => {
      console.log('error finding top title: ', err)
    })
}

exports.changeScore = (id, num, callback) => {

  Messages.find({ _id: id })
    .then((message) => {
      console.log('THIS IS THE SCORE: ', message)
      var newScore = message[0].score + num
      Messages.findOneAndUpdate({ _id: id }, { score: newScore })
        .then(() => {
          callback(null)
        })
        .catch((err) => {
          console.log('error in messages.findoneandupdate: ', err)
        })

    })
    .catch((err) => {
      console.log('err in messages.find in changescore: ', err)
    })

}