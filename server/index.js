const express = require('express');
const parser = require('body-parser');
const { Listing } = require('../database/db.js');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`App live on http://localhost:${port}`));

app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.get('/listings/:id', ({ params: { id } }, res) => {
  Listing.find({ id }).exec((err, results) => {
    if (err) {
      throw err;
    }
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(results));
  });
});
