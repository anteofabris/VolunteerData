import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import ChooseCity from'./ChooseCity.jsx';
import YourCity from './YourCity.jsx';




class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChosen: false
      dataReceived: false
    }
  }

  componentDidMount() {

  }

  render () {
    if (!this.state.isChosen) {

    } else if (this.state.dataReceived) {
    return (<div>App!</div>)
    } else {
      return (<div>LOADING SITE</div>);
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));