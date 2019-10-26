import React, {Component} from 'react';
import styles, {right, left, selectedStyle, number, elipses} from '../ViewSelector.css';

class End extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    var views = this.props.views;
    if (selected === views - 3) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='/assets/Left.png'></img></span>
          <span className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='/assets/Elipses.png'></img></span>
          <span className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
          <span className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span className={number} onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span className={number} onClick={currentView.bind(null, selected + 3)}>{selected + 3}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='/assets/Right.png'></img></span>
        </div>
      )
    } else if (selected === views - 2) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='/assets/Left.png'></img></span>
          <span className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='/assets/Elipses.png'></img></span>
          <span className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
          <span className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span className={number} onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='/assets/Right.png'></img></span>
        </div>
      )
    } else if (selected === views - 1) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='/assets/Left.png'></img></span>
          <span className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='/assets/Elipses.png'></img></span>
          <span className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
          <span className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='/assets/Right.png'></img></span>
        </div>
      )
    } else {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='/assets/Left.png'></img></span>
          <span className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='/assets/Elipses.png'></img></span>
          <span className={number} onClick={currentView.bind(null, selected - 2)}>{selected - 2}</span>
          <span className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
        </div>
      )
    }
  }
}

export default End;