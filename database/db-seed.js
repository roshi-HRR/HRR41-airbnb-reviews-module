const model = require('./model.js');
const db = require('./db.js');
const faker = require('faker');

var randomNum = (min, max, places = 0) => {
  return Number((Math.random() * (max - min) + min).toFixed(places));
}

var createReview = () => {
  var review = {
    user_id: randomNum(1000, 9999),
    user_pic: faker.image.avatar(),
    user_name: faker.name.firstName(),
    review_date: `${faker.date.month()} ${randomNum(2010, 2019)}`,
    review_text: faker.lorem.sentences(),
    review_language: "English",
    review_ratings: {
      communication: randomNum(0, 5, 1),
      location: randomNum(0, 5, 1),
      value: randomNum(0, 5, 1),
      check_in: randomNum(0, 5, 1),
      accuracy: randomNum(0, 5, 1),
      cleanliness: randomNum(0, 5, 1)
    }
  };
  return review;
}

var createHouse = (id) => {
  var house = {
    house_id: id,
    total_rating: null,
    total_rating_categories: {
      communication: null,
      location: null,
      value: null,
      check_in: null,
      accuracy: null,
      cleanliness: null
    },
    user_reviews: []
  };
  return house;
}

var addHouses = (num) => {
  for (var i = 0; i < num; i++) {
    var house = createHouse(i);
    db.addOneHouse(house, (err, result) => {
      if (err) {
        console.log(`err seeding house (${i}) to db:`, err);
      }
    })
  }
}

var addReviews = (num) => {
  for (var i = 0; i < num; i++) {
    var rando = randomNum(0, 300);
    for (var j = 0; j < rando; j++) {
      var review = createReview();
      db.addOneReview(review, i, (err, result) => {
        if (err) {
          console.log('error adding review to house during seeding:', err);
        }
      })
    }
  }
}

db.reset((err) => {
  if (err) {
    console.log('error deleting old records when seeding db:', err);
  } else {
    addHouses(100);
    setTimeout(addReviews, 2000, 100);
    console.log('completed seeding DB :D');
  }
})

module.exports = {
  'randomNum': randomNum,
  'createReview': createReview,
  'createHouse': createHouse,
  'addHouses': addHouses,
  'addReviews': addReviews
}
