import React, {Component} from 'react';
import styles, {main, line, numbers, category, categoryContainer, under} from './SubRatingTotal.css';

class SubRatingTotal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var rating = this.props.rating;
    console.log(rating.rating * 20);
    return (
      <div className={main}>
        <span className={category}>{rating.category}</span>
        <span>
          <img className={line} width={rating.rating * 20} src='https://rachels-review-bucket.s3.amazonaws.com/Line2.png' alt='*'></img>
          <img className={under} src='https://rachels-review-bucket.s3.amazonaws.com/Blank+Line.png'></img>
          </span>
        <span className={numbers}>{rating.rating}</span>
      </div>
    )
  }
}
export default SubRatingTotal;