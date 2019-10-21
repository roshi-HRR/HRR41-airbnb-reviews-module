import React from 'react';

class End extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    var views = this.props.views;
    if (selected = views - 3) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
          <span onClick={currentView.bind(null, 1)}>1</span>
          <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className='selected'>{selected}</span>
          <span onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span className='selected'>{views}</span>
          <span>></span>
        </div>
      )
    }
    return (
      <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span className='selected'>{views}</span>
          <span>></span>
      </div>
    )
  }
}

export default End;