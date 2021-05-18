import React from 'react';
import axios from 'axios';
import MessageContainer from './MessageContainer.jsx'




class ChatContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: null
    }
    this.submitMessage = this.submitMessage.bind(this)
    this.getFeed = this.getFeed.bind(this)

  }

  componentDidMount () {
    this.getFeed()

  }

  componentDidUpdate (prevProps) {
    if (this.props.zip !== prevProps.zip) {
      this.getFeed()
    }
  }

  getFeed () {
    // azios rewuest for feed specific to that zip
    axios.get(`/messages/${this.props.zip}`)
    .then((response) => {
      console.log('got our messages: ', response.data);
      this.setState({
        feed: response.data
      })

    })
    .catch((err) => {
      console.log('err in axios.get: ', err)
    })

  }

  submitMessage(e) {
    e.preventDefault()
    // post request to db
    console.log('e: ', e.target[0].value)
    var obj = {
      zip_code: this.props.zip,
      title: e.target[0].value,
      message: e.target[1].value,
      date: new Date(),
      score: 0
    }
    axios.post('/messages', obj)
    .then(() => {
      console.log('posted!')
      this.getFeed()
    })
    .catch((err) => {
      console.log('error in axios.post: ', err)
    })
  }


  render() {


    if (this.state.feed) {
      if (this.state.feed[0]) {
    return (<div id="chat-container">
     " {this.state.feed[0].title} "
      <form onSubmit={this.submitMessage}>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Message"></input>
        <input type="submit" value="Post"></input>
      </form>
      {this.state.feed.map((msg, index) => {
        return <MessageContainer message={msg} key={index}/>
      })}

    </div>)
      } else {
        return (<div id="chat-container">
        GET THE CHAT GOING
        <form onSubmit={this.submitMessage}>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Message"></input>
          <input type="submit" value="Post"></input>
        </form>

      </div>)
      }
    } else {
      return null
    }

  }
}

export default ChatContainer;