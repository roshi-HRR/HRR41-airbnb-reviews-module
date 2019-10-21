import React from 'react';
import Review from './ReviewList/Review.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var reviews = this.props.house.user_reviews;
    if (reviews) {
      return (
      <div>
        <ReviewList reviews={reviews}/>
      </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Body;