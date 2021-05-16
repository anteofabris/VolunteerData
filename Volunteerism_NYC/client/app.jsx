import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import ChooseCity from './ChooseCity.jsx';
import YourCity from './YourCity.jsx';




class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChosen: false,
      dataReceived: false,
      rankList: []
    }
  }

  componentDidMount() {

    axios.get('/rankings')
      .then((response) => {
        console.log('got response: ', response)
        this.setState({
          isChosen: true,
          dataReceived: true,
          rankList: response.data
        })
      })
      .catch((err) => {
        console.log('err in app.jsx: ', err)
      })

  }

  render() {
    if (!this.state.isChosen) {

    } else if (this.state.dataReceived) {
      return (<div>
        <YourCity rankList={this.state.rankList} />
      </div>)
    } else {
      return (<div>
        <YourCity rankList={this.state.rankList} />
      </div>);
    }
    return (<div>nothing</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));