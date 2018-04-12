const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/interstellarbnb')

let listingSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  title: String,
  price: Number,
  coverPhoto: String,
  reviews: Array,
  description: String,
  type: String,
  bedCount: Number,
  location: String
});

let Listing = mongoose.model('Listing', listingSchema)

module.exports.Listing = Listing;
