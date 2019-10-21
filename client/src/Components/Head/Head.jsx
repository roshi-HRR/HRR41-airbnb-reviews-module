import React from 'react';
import SubRatingTotal from './SubRatingTotal.jsx'

class Head extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    //prep to make the following code easier to read
    var house = this.props.house;
    var count = this.props.house.user_reviews_count;
    var hostName = this.props.house.host_name;
    var reviews = this.props.house.user_reviews;

    //creates and sorts the ratingTotals array so it can be passed to SubRatingTotal
    var ratingTotals = [];
    var ratings = house.total_rating_categories;
    for (var key in ratings) {
      ratingTotals.push({'category': key, 'rating': ratings[key]});
    }
    ratingTotals.sort(function(a, b) {
      return b.rating - a.rating;
    });

    //options for 0, 1, 2, or more reviews
    if (count === 0) {
      return(
        <div>
          <p>No reviews (yet)</p>
          <p>Be one of the first to review {hostName}'s place to help them get started</p>
          <span>
            <img src={'/Users/rachnovo/Desktop/HRR41/FEC/RefundPolicyImage.png'} alt={''} />
          </span>
          <p>We’re here to help your trip go smoothly. Every reservation is covered by Airbnb’s <a href='link'>Guest Refund Policy</a>.</p>
        </div>
      )
      } else if (count === 1) {
        return (
          <div>
            <p>Review</p>
            <div>
              <span>1 Review</span>
              <span>Search:</span>
            </div>
          </div>
        )
    } else if (count === 2) {
      return (
        <div>
          <p>Reviews</p>
          <div>
            <span>2 Reviews</span>
            <span>Search:</span>
          </div>
        </div>
      )
    }
    return (
    <div className='HeadContainer'>
      <p>Reviews</p>
      <div className='completeTotals'>
        <span className='totalStar'>{house.total_rating || 'no rating yet :('}</span>
        <span className='reviewCount'>{house.user_reviews_count} reviews</span>
        <span>Search:</span>
      </div>
      <div className='subTotals'>
        {ratingTotals ? ratingTotals.map((el, i) => <SubRatingTotal key={i} rating={el}/>) : ''}
      </div>
    </div>
    )
  }
}
export default Head;

//reviews total, number of reviews, search
//mapped subCategoryTotal