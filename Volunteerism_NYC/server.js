const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
const db = require('./database/index.js');
const rankings = require('./database/controllers/rankings.js')
const zipPaths = require('./database/controllers/zipPaths.js')


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

// GET request for specific zip chat

const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})