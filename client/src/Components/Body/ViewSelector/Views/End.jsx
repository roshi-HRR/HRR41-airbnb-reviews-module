import React from 'react';

class End extends React.Component {
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
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span>...</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className='selected'>{selected}</span>
          <span onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span onClick={currentView.bind(null, selected + 3)}>{selected + 3}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else if (selected === views - 2) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span>...</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className='selected'>{selected}</span>
          <span onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else if (selected === views - 1) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span>...</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className='selected'>{selected}</span>
          <span onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span onClick={currentView.bind(null, selected + 1)}>></span>
        </div>
      )
    } else {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span>...</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 2}</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className='selected'>{selected}</span>
        </div>
      )
    }
  }
}

export default End;