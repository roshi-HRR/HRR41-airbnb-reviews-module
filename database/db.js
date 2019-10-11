const mongoose = require('mongoose');
const uri = 'mongodb://localhost/reviews';
const Reviews = require('./model.js');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log('error connecting to db -->', err);
  } else {
    console.log("Connected successfully to server");
  }
});

var accessAllData = (callback) => {
  Reviews.find((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

var accessOneHouse = (id, callback) => {
  Reviews.findOne({'house_id': id}, (err, house) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, house);
    }
  });
};

var addOneHouse = (house, callback) => {
  Reviews.create(house, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  })
};

var addOneReview = (review, house_id, callback) => {
  Reviews.findOne({'house_id': id}, (err, house) => {
    if (err) {
      callback(err);
    } else {
      house.reviews.push(review);
      house.save((err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    }
  })
}
