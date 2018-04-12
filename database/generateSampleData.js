const db = require('./db.js');
const faker = require('faker');

let getListingType = function() {
  let types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite', 'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship']; 
  let randomIndex = Math.floor(Math.random() * 10);

  return types[randomIndex];
}

let generateRatings = function() {
  let ratings = [];
  let ratingsCount = Math.floor(Math.random() * 50);
  for (let index = 0; index < ratingsCount; index++) {
    ratings.push(Math.floor(Math.random() * 6))
  }
  return ratings;
}

for (let i = 1; i < 101; i++) {
  let listingData = {
    id: i,
    title: faker.company.catchPhrase(),
    price: Math.floor(Math.random() * 1000),
    coverPhoto: 'https://source.unsplash.com/800x450/?space',
    reviews: generateRatings(),
    type: getListingType(),
    bedCount: Math.floor(Math.random() * 10),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country()
  }
  let listing = new db.Listing(listingData)
  listing.save((err, listing) => {
    if (err) {
      console.error(err)
    }
  })
}
