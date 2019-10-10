const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/reviews';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log('error connecting to db -->', err);
  } else {
    console.log("Connected successfully to server");
  }
});

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