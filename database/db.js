const mongoose = require('mongoose');
const random = require('mongoose-random');

mongoose.connect('mongodb://localhost/interstellarbnb')
  .catch(error => console.error('connection error', error.message, error.stack));

const listingSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  price: Number,
  imageUrl: String,
  reviews: Array,
  avgRating: Number,
  type: String,
  bedCount: Number,
  city: String,
  state: String,
  country: String,
});

listingSchema.plugin(random, { path: 'r' });
const Listing = mongoose.model('Listing', listingSchema);

const disconnect = () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed');
    process.exit(0);
  });
};

module.exports.Listing = Listing;
module.exports.disconnect = disconnect;
