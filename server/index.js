const express = require('express');
const parser = require('body-parser');
const Listing = require('../database/db.js').Listing;

let app = express();
let port = 3001;

app.listen(port, () => console.log(`App live on http://localhost:${port}`));

app.use(express.static('public'))
app.get('/listings', (req, res) => {
  Listing.find({}).exec((err, results) => {
    if (err) {
      throw err;
    }
    res.writeHead(201, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(results));
  });
})
