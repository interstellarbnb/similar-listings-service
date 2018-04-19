const express = require('express');
const parser = require('body-parser');
const { Listing } = require('../database/db.js');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`App live on http://localhost:${port}`));

app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/listings/:id', ({ params: { id } }, response) => {
  Listing.findRandom({ id: { $ne: id } }).limit(12).exec((error, results) => {
    if (error) {
      response.status(404).end('Record not found');
    } else {
      response.status(200).send(results);
    }
  });
});

app.post('/listings', ({
  body: {
    id,
    title,
    price,
    imageUrl,
    reviews,
    avgRating,
    type,
    bedCount,
    city,
    state,
    country,
  },
}, response) => {
  const listingData = {
    id,
    title,
    price,
    imageUrl,
    reviews,
    avgRating,
    type,
    bedCount,
    city,
    state,
    country,
  };
  const listing = new Listing(listingData);
  listing.save((error) => {
    if (error) {
      response.status(404).end('Post unsuccessful!');
    } else {
      response.status(201).send('Post successful!');
    }
  });
});
