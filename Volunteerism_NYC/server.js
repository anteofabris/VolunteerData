const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
const db = require('./database/index.js');
const rankings = require('./database/controllers/rankings.js')
const zipPaths = require('./database/controllers/zipPaths.js')
const messages = require('./database/controllers/messages.js')
const orgs = require('./database/controllers/orgs.js')
const comments = require('./database/controllers/comments.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// // GET request for zip code data
// app.get('/rankings', (req, res) => {
//   rankings.getRankedList((err, data) => {
//     if (err) {
//       console.log('error in app.get: ', err)
//     } else {
//       //console.log('got our data in app.get: ', data)
//       res.send(data)
//     }
//   })

// })

// GET request for SVG paths opbject
app.get('/zipPaths', (req, res) => {
  zipPaths.getPaths((err, data) => {
    if (err) {
      console.log('error in zip.getpaths: ', err)
    } else {
      // console.log('got our data in zipPaths!', data)
      res.send(data)
    }
  })
})

// GET request for messages by given zip code
app.get('/messages/:zip_code', (req, res) => {
  var zip = req.params.zip_code
  // console.log('in app.get messages, req.body: ', req.params)
  messages.getAll(zip, (err, data) => {
    if (err) {
      console.log('error getting messages in app.get: ', err)
    } else {
      res.send(data)
    }
  })
})

// GET request for top 5 messages!
app.get('/leaderboard', (req, res) => {
  messages.getLeaderboard((err, data) => {
    if (err) {
      console.log('err getting top 5!: ', err)
    } else {
      res.send(data)
    }
  })
})

// GET request for community organizations by zip code
app.get('/orgs/:zip_code', (req, res) => {
  var zip = req.params.zip_code
  //console.log('in app.get orgs, req.body: ', req.params)
  orgs.getAll(zip, (err, data) => {
    if (err) {
      console.log('error in orgs.getAll: ', err)
    } else {
      res.send(data)
    }
  })
})

// GET request for top title by zip code
app.get('/topTitle/:zip_code', (req, res) => {
  var zip = req.params.zip_code
  //console.log('in app.get for top title')
  messages.findTopTitle(zip, (err, data) => {
    if (err) {
      console.log('error in messages.findTopTitle: ', err)
    } else {
      res.send(data)
    }
  })
})

// POST request for specific zip chat
app.post('/messages', (req, res) => {
  console.log('in app.post, req.body: ', req.body)
  messages.addMessage(req.body, (err) => {
    if (err) {
      console.log('error in app.post: ', err)
    } else {
      res.send()
    }
  })

})

// POST request to change a message's score
app.post('/messages/changeScore/:messageId', (req, res) => {
  console.log('this is req.body in changescore: ', req.body)
  console.log('this is req.params in changescore: ', req.params)
  var id = req.params.messageId
  var num = req.body.num
  messages.changeScore(id, num, (err) => {
    if (err) {
      console.log('error in app.post changeScore:', err)
    } else {
      res.send()
    }
  })
})

// POST request to change a comment's score
app.post('/comments/changeScore/:commentId', (req, res) => {
console.log('req.body:', req.body)
console.log('req.params:', req.params)
  var id = req.params.commentId
  var num = req.body.num
  comments.changeScore(id, num, (err) => {
    if (err) {
      console.log('error in app.post comments.changeScore:', err)
    } else {
      res.send()
    }
  })

})

// POST request to add a comment by message ID
app.post('/comments/:messageId', (req, res) => {
  // console.log('this is req.body in post Comments: ', req.body)
  // console.log('this is req.params in post Comments: ', req.params)
  comments.addComment(req.body, (err) => {
    if (err) {
      console.log('error posting a comment!')
    } else {
      res.send()
    }
  })
})

// GET request for all comments related to a message
app.get('/comments/:messageId', (req, res) => {
  console.log('this is req.params in get comments: ', req.params)
  comments.getComments(req.params.messageId, (err, data) => {
    if (err) {
      console.log('error in app.get comments: ', err)
    } else {
      res.send(data)
    }
  })
})


const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})