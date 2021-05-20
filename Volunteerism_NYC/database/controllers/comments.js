const Comments = require('../models/CommentsSchema.js');

exports.addComment = (message, callback) => {
  Comments.create({

    message_id: message.message_id,
    zip_code: message.zip_code,
    comment: message.comment,
    score: message.score,
    date_created: message.date_created
  })
    .then(() => {
      callback(null)
    })
    .catch((err) => {
      console.log('error adding comment to db!: ', err)
    })
}

exports.getComments = (id, callback) => {
  Comments.find({ message_id: id }).sort({ score: -1, date_created: -1 })
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
      console.log('err getting comments from db: ', err)
    })
}

exports.changeScore = (id, num, callback) => {

  Comments.find({ _id: id })
    .then((message) => {
      console.log('THIS IS THE SCORE: ', message)
      var newScore = message[0].score + num
      Comments.findOneAndUpdate({ _id: id }, { score: newScore })
        .then(() => {
          callback(null)
        })
        .catch((err) => {
          console.log('error in Comments.findoneandupdate: ', err)
        })

    })
    .catch((err) => {
      console.log('err in Comments.find in changescore: ', err)
    })

}