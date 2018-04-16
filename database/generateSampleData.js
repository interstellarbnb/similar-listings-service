const db = require('./db.js');
const faker = require('faker');

const getListingType = () => {
  let types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite', 'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship'];
  let randomIndex = Math.floor(Math.random() * 10);

  return types[randomIndex];
};

const generateImage = () => {
  let query = ['crater', 'stars', 'galaxy', 'tree-house', 'satellite'];
  let randomIndex = Math.floor(Math.random() * query.length);

  return query[randomIndex];
};

const generateRatings = () => {
  let ratings = [];
  let ratingsCount = Math.floor(Math.random() * 50);
  for (let index = 0; index < ratingsCount; index += 1) {
    ratings.push(Math.floor(Math.random() * 6));
  }
  return ratings;
};

for (let i = 1; i < 101; i += 1) {
  let listingData = {
    id: i,
    title: `${faker.commerce.productAdjective()} ${getListingType()}`,
    price: Math.floor(Math.random() * 1000),
    imageUrl: `https://source.unsplash.com/333x222/?${generateImage()}`,
    reviews: generateRatings(),
    type: getListingType(),
    bedCount: Math.floor(Math.random() * 10),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
  };
  let listing = new db.Listing(listingData)
  listing.save((err) => {
    if (err) {
      console.error(err)
    }
  });
}
