const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
const db = require('./database/index.js');
const rankings = require('./database/controllers/rankings.js')
const zipPaths = require('./database/controllers/zipPaths.js')
const messages = require ('./database/controllers/messages.js')
const orgs = require ('./database/controllers/orgs.js')


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// GET request for zip code data
app.get('/rankings', (req, res) => {
  rankings.getRankedList((err, data) => {
    if (err) {
      console.log('error in app.get: ', err)
    } else {
      //console.log('got our data in app.get: ', data)
      res.send(data)
    }
  })

})

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
  console.log('in app.get messages, req.body: ', req.params)
  messages.getAll(zip, (err, data) => {
    if (err) {
      console.log('error getting messages in app.get: ', err)
    } else {
      res.send(data)
    }
  })
})

// GET request for community organizations by zip code
app.get('/orgs/:zip_code', (req, res) => {
  var zip = req.params.zip_code
  console.log('in app.get orgs, req.body: ', req.params)
  orgs.getAll(zip, (err, data) => {
    if (err) {
      console.log('error in orgs.getAll: ', err)
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

const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})