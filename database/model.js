const mongoose = require('mongoose');

var user_reviewSchema = new mongoose.Schema({
  user_id: Number,
  user_pic: String,
  user_name: String,
  review_date: String,
  review_text: String,
  review_ratings: {
    Communication: Number,
    Location: Number,
    Value: Number,
    'Check-in': Number,
    Accuracy: Number,
    Cleanliness: Number
  }
})

var reviewSchema = new mongoose.Schema({
  house_id: { type: Number, unique: true },
  host_name: String,
  total_rating: Number,
  total_rating_categories: {
    Communication: Number,
    Location: Number,
    Value: Number,
    'Check-in': Number,
    Accuracy: Number,
    Cleanliness: Number
  },
  user_reviews_count: Number,
  user_reviews: [user_reviewSchema]
})

var Review = mongoose.model('Reviews', reviewSchema);
var User_review = mongoose.model('User_review', user_reviewSchema);

module.exports = {'Review': Review, 'User_review': User_review};
