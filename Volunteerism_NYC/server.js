const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// GET request for zip code data
app.get('/rankings', (req, res) => {

})

const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})