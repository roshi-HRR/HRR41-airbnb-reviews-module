//house:
{
  house_id: 2345,
  total_rating: 3.94,
  total_rating_categories: {
    communication: 3.5,
    location: 4.7,
    value: 4.9,
    check_in: 2.9,
    accuracy: 3.5,
    cleanliness: 4.1
  },
  user_reviews: []
}
//JSON string
{"house_id":2345,"total_rating":3.94,"total_rating_categories":{"communication":3.5,"location":4.7,"value":4.9,"check_in":2.9,"accuracy":3.5,"cleanliness":4.1},"user_reviews":[]}

//user_reviews:
{
  user_id: 23457,
  user_pic: 'url to picture',
  user_name: 'Ravi',
  review_date: 'September 2019',
  review_text: 'Such a great place to stay! Amazing host! So welcoming :)',
  review_language: 'English',
  review_ratings: {
    communication: 3.5,
    location: 4.7,
    value: 4.9,
    check_in: 2.9,
    accuracy: 3.5,
    cleanliness: 4.1
  }
}
//JSON string
{"user_id":23457,"user_pic":"url to picture","user_name":"Ravi","review_date":"September 2019","review_text":"Such a great place to stay! Amazing host! So welcoming :)","review_language":"English","review_ratings":{"communication":3.5,"location":4.7,"value":4.9,"check_in":2.9,"accuracy":3.5,"cleanliness":4.1}}

//what goes to the server:
{"review":{"user_id":23457,"user_pic":"url to picture","user_name":"Ravi","review_date":"September 2019","review_text":"Such a great place to stay! Amazing host! So welcoming :)","review_language":"English","review_ratings":{"communication":3.5,"location":4.7,"value":4.9,"check_in":2.9,"accuracy":3.5,"cleanliness":4.1}},"house_id":2345}

