const mongoose = require('mongoose');

var user_reviewSchema = new mongoose.Schema({
  user_id: Number,
  user_pic: String,
  user_name: String,
  review_date: String,
  review_text: String,
  review_ratings: {
    communication: Number,
    location: Number,
    value: Number,
    check_in: Number,
    accuracy: Number,
    cleanliness: Number
  }
})

var reviewSchema = new mongoose.Schema({
  house_id: { type: Number, unique: true },
  total_rating: Number,
  total_rating_categories: {
    communication: Number,
    location: Number,
    value: Number,
    check_in: Number,
    accuracy: Number,
    cleanliness: Number
  },
  user_reviews: [user_reviewSchema]
})

var Review = mongoose.model('Reviews', reviewSchema);
var User_review = mongoose.model('User_review', user_reviewSchema);

module.exports = {'Review': Review, 'User_review': User_review};
