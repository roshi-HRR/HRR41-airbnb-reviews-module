const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    //this bindings
  }
  render(){
    return(
      <div>This is my app :D</div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));