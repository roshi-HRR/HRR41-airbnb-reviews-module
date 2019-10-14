const mongoose = require('mongoose');
const uri = 'mongodb://localhost/reviews';
const model = require('./model.js');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log('error connecting to db -->', err);
  } else {
    console.log("Connected successfully to database");
  }
});

var reset = (callback) => {
  model.Review.deleteMany({},(err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  })
};

var accessOneHouse = (id, callback) => {
  model.Review.findOne({'house_id': id}, (err, house) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, house);
    }
  });
};

var addOneHouse = (house, callback) => {
  return model.Review.create(house).then((result) => {
    callback(null, result);
  }).catch(function (err) {callback(err)});
};

var addOneReview = (review, house_id, callback) => {
  //console.log('what info did addOneReview get?????', typeof house_id);
  //find it, save it in a variable, add the review to it and save it
  // model.Review.find({'house_id': house_id}, (err, result) => {
  //   if (err) {
  //     callback(err);
  //   }
  // }).exec((err, home) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     console.log('hooooooome',home);
  //     home.user_reviews.push(review);
  //     home.save();
  //     callback(null, results);
  //   }
  // })

  model.Review.updateOne({'house_id': house_id}, {$push: {'user_reviews': review}}, {safe : true}, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {
  'reset': reset,
  'accessOneHouse': accessOneHouse,
  'addOneHouse': addOneHouse,
  'addOneReview': addOneReview
};