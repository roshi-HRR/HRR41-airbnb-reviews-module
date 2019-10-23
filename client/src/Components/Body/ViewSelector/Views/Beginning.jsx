import React, {Component} from 'react';


class Beginning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    var views = this.props.views;
    if (selected === 1) {
      return (
        <div>
          <span className='selected'>1</span>
          <span onClick={currentView.bind(null, 2)}>2</span>
          <span onClick={currentView.bind(null, 3)}>3</span>
          <span>...</span>
          <span onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else if (selected === 2) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span className='selected'>2</span>
          <span onClick={currentView.bind(null, 3)}>3</span>
          <span>...</span>
          <span onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else if (selected === 3) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span onClick={currentView.bind(null, 2)}>2</span>
          <span className='selected'>3</span>
          <span onClick={currentView.bind(null, 4)}>4</span>
          <span>...</span>
          <span onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span onClick={currentView.bind(null, 2)}>2</span>
          <span onClick={currentView.bind(null, 3)}>3</span>
          <span className='selected'>4</span>
          <span onClick={currentView.bind(null, 5)}>5</span>
          <span>...</span>
          <span onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    }
  }
}

export default Beginning;