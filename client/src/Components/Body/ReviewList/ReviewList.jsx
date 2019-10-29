import React, {Component, createRef} from 'react';
import Review from './Review.jsx';
import ViewSelector from './ViewSelector/ViewSelector.jsx';
import styles, {main, viewSelector} from './ReviewList.css';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = createRef();
    this.currentView = this.currentView.bind(this);
  }

  currentView(selected = 1) {
    if (this.props.reviews) {
      if (this.props.reviews.length > 7) {
        var max = selected * 7;
        var min = max - 7;
        this.setState({reviewList: this.props.reviews.slice(min, max), 'selected': selected});
      } else {
        this.setState({reviewList: this.props.reviews, 'selected': selected});
      }
    }
    if (this.ref.current) {
      this.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  componentDidMount() {
    this.currentView();
  }

  render(){
    if (this.state.reviewList) {
      return(
        <div className={main} ref={this.ref}>
          {this.state.reviewList.map((el, i) => <Review key={i} num={i} review= {el}/>)}
          <div className={viewSelector}>
            <ViewSelector
              currentView={this.currentView}
              reviewCount={this.props.reviews.length}
              selected={this.state.selected}
            />
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default ReviewList;