import React from 'react';
import ChatContainer from './ChatContainer.jsx';
import ViewOrgs from './ViewOrgs.jsx';
import TopMessageContainer from './TopMessageContainer.jsx';
import axios from 'axios';



class ZipContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leaderboard: null
    }

  }

  componentDidMount() {
    console.log('mounted')
    axios.get('/leaderboard')
      .then((response) => {
        console.log('got top 5!: ', response.data)
        this.setState({
          leaderboard: response.data
        })

      })

  }


  render() {
    if (this.props.zip) {
      return (<div id="zip-container">
        {this.props.zip}
        <ChatContainer toggleComments={this.props.toggleComments} zip={this.props.zip} />
        {/* <ViewOrgs zip={this.props.zip} /> */}
      </div>)
    } else if (this.state.leaderboard) {
      return (<div id="zip-container">top stories:
        <TopMessageContainer toggleComments={this.props.toggleComments} leaderboard={this.state.leaderboard}/>
      </div>)
      } else {
        return null

    }
  }
}

export default ZipContainer;