import React from 'react';
import axios from 'axios';
import MessageContainer from './MessageContainer.jsx'
import TopMessage from './TopMessage.jsx'




class ChatContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: null
    }
    // this.submitMessage = this.submitMessage.bind(this)
    // this.getFeed = this.getFeed.bind(this)
    this.changeScore = this.changeScore.bind(this)

  }

  componentDidMount () {
    // this.getFeed()

  }

  componentDidUpdate (prevProps) {
    if (this.props.zip !== prevProps.zip) {
      // this.getFeed()
    }
  }

  // getFeed () {
  //   // azios rewuest for feed specific to that zip
  //   axios.get(`/messages/${this.props.zip}`)
  //   .then((response) => {
  //     console.log('got our messages: ', response.data);
  //     this.setState({
  //       feed: response.data
  //     })

  //   })
  //   .catch((err) => {
  //     console.log('err in axios.get: ', err)
  //   })

  // }

  // submitMessage(e) {
  //   e.preventDefault()
  //   // post request to db
  //   console.log('e: ', e.target[0].value)
  //   var obj = {
  //     zip_code: this.props.zip,
  //     title: e.target[0].value,
  //     message: e.target[1].value,
  //     date: new Date(),
  //     score: 0
  //   }
  //   axios.post('/messages', obj)
  //   .then(() => {
  //     console.log('posted!')
  //     this.getFeed()
  //   })
  //   .catch((err) => {
  //     console.log('error in axios.post: ', err)
  //   })
  // }

  changeScore(id, num) {
    //console.log('current_id: ', id)
    var obj = {num: num}
    axios.post(`/messages/changeScore/${id}`, obj)
    .then(() => {
      console.log('score changed!')
      this.getFeed()
    })
    .catch((err) => {
      console.log('err in ChatContainer changescore', err)
    })

  }


  render() {



    return (<div id="top-message-container">

      {this.props.leaderboard.map((msg, index) => {
        return <TopMessage toggleComments={this.props.toggleComments} changeScore={this.changeScore} message={msg} key={index}/>
      })}

    </div>)



  }
}

export default ChatContainer;