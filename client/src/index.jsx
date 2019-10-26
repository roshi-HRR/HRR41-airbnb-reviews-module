import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Body from './Components/Body/Body.jsx';
import Head from './Components/Head/Head.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'house': {}
    }
    //this bindings
    this.fetch = this.fetch.bind(this);
  }

  //currently calling data for a random room
  fetch() {
    const url = new URL(window.location.href);
    const houseId = url.searchParams.get('house_id');
    $.get( `/rooms/${houseId}`, (data) => {
      this.setState({'house': data});
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return(
      <div>
        <Head house={this.state.house}/>
        <Body house={this.state.house}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('review'));

export default App;
