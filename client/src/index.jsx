const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const axios = require('axios').default;
import Body from './Components/Body/Body.jsx'
import Head from './Components/Head/Head.jsx'
//const Body = require('./Components/Body.jsx');
//const Head = require('./Components/Head.jsx');

class App extends React.Component {
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
    $.get( `/rooms/${Math.floor(Math.random() * 100)}`, (data) => {
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

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
