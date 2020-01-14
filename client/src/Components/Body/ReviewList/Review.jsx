import React, {Component} from 'react';
import styles, {info, main, pic, name, date, textStyles, readMore} from './Review.css';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMoreClicked: false,
      length: 'short'
    }
    this.readMore = this.readMore.bind(this);
  }
  readMore() {
    this.setState({readMoreClicked: true});
  }
  componentDidMount(){
    var review = this.props.review;
    if (review.review_text.length > 275) {
      this.setState({length: 'long'});
    } else {
      this.setState({length: 'short'});
    }
  }
  render() {
    var review = this.props.review;
    var text;
    if (this.state.length === 'short' || this.state.readMoreClicked) {
      text = <div>{review.review_text}</div>;
    } else {
      text = <div>{review.review_text.slice(0, 275) + '...'}<a onClick={this.readMore}>Read more</a></div>;
    }
    return(
      <div className={main} id={review.user_id}>
        <span><img className={pic} src={review.user_pic}></img></span>
        <div className={info}>
          <span className={name}>{review.user_name}</span>
          <span className={date}>{review.review_date}</span>
        </div>
        <div className={textStyles}>
          {text}
        </div>
      </div>
    )
  }
}

export default Review;
