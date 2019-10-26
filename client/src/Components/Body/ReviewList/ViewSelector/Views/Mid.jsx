import React, {Component} from 'react';
import styles, {right, left, selectedStyle, number, elipses} from '../ViewSelector.css';

class Mid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    var views = this.props.views;
    return (
      <div>
        <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='/assets/Left.png'></img></span>
        <span className={number} onClick={currentView.bind(null, 1)}>1</span>
        <span><img className={elipses} src='/assets/Elipses.png'></img></span>
        <span className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
        <span className={selectedStyle}>{selected}</span>
        <span className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
        <span><img className={elipses} src='/assets/Elipses.png'></img></span>
        <span className={number} onClick={currentView.bind(null, views)}>{views}</span>
        <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='/assets/Right.png'></img></span>
      </div>
    )
  }
}

export default Mid;