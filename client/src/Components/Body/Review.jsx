import React from 'react';
import $ from 'jquery';

class Review extends React.Component {
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
    if (this.state.length === 'long') {
      if (this.state.readMoreClicked) {
        text = <div>{review.review_text}</div>;
      } else {
        text = <div>{review.review_text.slice(0, 275) + '...'}<a onClick={this.readMore}>Read more</a></div>;
      }
    } else {
      text = <div>{review.review_text}</div>;
    }

    return(
      <div>
        <span><a href={review.review_pic}></a></span>
        <span>{review.user_name}</span>
        <span>{review.review_date}</span>
        <div>
          {text}
        </div>
      </div>
    )
  }
}

export default Review;
