import React from 'react';

class Mid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    var views = this.props.views;
    return (
      <div>
        <span onClick={currentView.bind(null, selected - 1)}>BACK</span>
        <span onClick={currentView.bind(null, 1)}>1</span>
        <span>...</span>
        <span onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
        <span className='selected'>{selected}</span>
        <span onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
        <span>...</span>
        <span onClick={currentView.bind(null, views)}>{views}</span>
        <span onClick={currentView.bind(null, selected + 1)}>></span>
      </div>
    )
  }
}

export default Mid;