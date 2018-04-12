const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/interstellarbnb');

const listingSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  price: Number,
  coverPhoto: String,
  reviews: Array,
  description: String,
  type: String,
  bedCount: Number,
  location: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;
