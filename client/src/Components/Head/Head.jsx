import React, {Component} from 'react';
import styles, {reviewCount, main, title, writing, numbers, search, subTotals, totalStar, star} from './Head.css';
import SubRatingTotal from './SubRatingTotal.jsx';

class Head extends Component {
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
        <div className={main}>
          <p className={title}>No reviews (yet)</p>
          <p className={writing}>Be one of the first to review {hostName}'s place to help them get started</p>
          <span>
            <img src={'/Users/rachnovo/Desktop/HRR41/FEC/RefundPolicyImage.png'} alt={''} />
          </span>
          <p>We’re here to help your trip go smoothly. Every reservation is covered by Airbnb’s <a href='link'>Guest Refund Policy</a>.</p>
        </div>
      )
      } else if (count === 1) {
        return (
          <div className={main}>
            <p className={title}>Review</p>
            <div>
              <div>
                <span className={numbers}>1</span>
                <span className={writing}>Review</span>
              </div>
              <span className={search}>Search:</span>
            </div>
          </div>
        )
    } else if (count === 2) {
      return (
        <div className={main}>
          <p className={title}>Reviews</p>
          <div>
            <div>
              <span className={numbers}>2</span>
              <span className={writing}>Reviews</span>
            </div>
            <span className={search}>Search:</span>
          </div>
        </div>
      )
    }
    return (
    <div className={main}>
      <p className={title}>Reviews</p>
      <div className='completeTotals'>
        <span className={totalStar}>
          <img className={star} src='https://rachels-review-bucket.s3.amazonaws.com/Star.png' alt='*'></img>
          <span className='totalStar' className={numbers}>{house.total_rating || 'no rating yet :('}</span>
        </span>
        <span className={reviewCount}>
          <span className={numbers}>{house.user_reviews_count}</span>
          <span className={writing}>reviews</span>
        </span>
      </div>
      <div className={subTotals}>
        {ratingTotals ? ratingTotals.map((el, i) => <SubRatingTotal key={i} rating={el}/>) : ''}
      </div>
      {/* <span className={search}>Search:</span> */}
      <input className={search} type="text" placeholder="Search reviews"></input>
    </div>
    )
  }
}

export default Head;