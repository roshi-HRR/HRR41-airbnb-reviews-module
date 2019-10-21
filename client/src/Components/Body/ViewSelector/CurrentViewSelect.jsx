import React from 'react';
import Beginning from './Views/Beginning.jsx';
import End from './Views/End.jsx';
import Mid from './Views/Mid.jsx';

class CurrentViewSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var views = Math.ceil(this.props.reviewCount / 7);
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    console.log(views, selected);
    if (views >= 6 || (views === 5 && selected < 4) || (views === 4 && selected < 3)) {
      if (selected <= 4) {
        return <Beginning selected={selected} currentView={currentView} views={views}/>
      } else if (selected <= views - 4) {
        return <End selected={selected} currentView={currentView} views={views}/>
      } else {
        //mid
        return (
          <div>
            <span>BACK</span>
            <span>1</span>
            <span>...</span>
            <span>{selected - 1}</span>
            <span className='selected'>{selected}</span>
            <span>{selected + 1}</span>
            <span>>...</span>
            <span>{views}</span>
            <span>></span>
          </div>
        )
      }
    }
    return <div></div>
  }
}

export default CurrentViewSelect;
