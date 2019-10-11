const mongoose = require('mongoose');

var user_review = new mongoose.Schema({
  user_id: Number,
  user_pic: String,
  user_name: String,
  review_date: String,
  review_text: String,
  review_language: String,
  review_ratings: {
    communication: Number,
    location: Number,
    value: Number,
    check_in: Number,
    accuracy: Number,
    cleanliness: Number
  }
})

var Reviews = mongoose.model('Reviews', new mongoose.Schema({
  house_id: Number,
  total_rating: Number,
  total_rating_categories: {
    communication: Number,
    location: Number,
    value: Number,
    check_in: Number,
    accuracy: Number,
    cleanliness: Number
  },
  user_reviews: [user_review]
}));

module.exports = Reviews;