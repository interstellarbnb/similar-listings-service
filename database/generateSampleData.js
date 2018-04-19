const db = require('./db.js');
const faker = require('faker');

const getListingType = () => {
  const types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite', 'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship'];
  const randomIndex = Math.floor(Math.random() * 10);

  return types[randomIndex];
};

const generateImage = () => {
  const query = ['crater', 'stars', 'galaxy', 'tree-house', 'satellite'];
  const randomIndex = Math.floor(Math.random() * query.length);

  return query[randomIndex];
};

const generateRatings = () => {
  const ratings = [];
  const ratingsCount = Math.floor(Math.random() * 20) + 1;
  for (let index = 0; index < ratingsCount; index += 1) {
    ratings.push(Math.floor(Math.random() * 6));
  }
  return ratings;
};

const getAverageRating = (reviews) => {
  let sum = 0;
  for (let reviewIndex = 0; reviewIndex < reviews.length; reviewIndex += 1) {
    sum += reviews[reviewIndex];
  }
  return sum / reviews.length;
};

for (let i = 1; i < 101; i += 1) {
  const reviews = generateRatings();

  const listingData = {
    id: i,
    title: `${faker.commerce.productAdjective()} ${getListingType()}`,
    price: Math.floor(Math.random() * 1000),
    imageUrl: `https://source.unsplash.com/333x222/?${generateImage()}`,
    reviews,
    avgRating: getAverageRating(reviews),
    type: getListingType(),
    bedCount: Math.floor(Math.random() * 10),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
  };

  const listing = new db.Listing(listingData);
  listing.save((err) => {
    if (err) {
      console.error(err);
    }
  });
}
