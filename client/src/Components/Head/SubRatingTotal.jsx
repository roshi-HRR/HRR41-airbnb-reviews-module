import React, {Component} from 'react';
import styles, {main, line, numbers, category, categoryContainer} from './SubRatingTotal.css';

class SubRatingTotal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var rating = this.props.rating;
    return (
      <div className={main}>
        <span className={category}>{rating.category}</span>
        <span><img className={line} src='/assets/Line.png' alt='*'></img></span>
        <span className={numbers}>{rating.rating}</span>
      </div>
    )
  }
}

export default SubRatingTotal;