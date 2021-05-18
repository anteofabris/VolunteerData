import React from 'react';
import axios from 'axios';




class ChatContainer extends React.Component {
  constructor(props) {
    super(props)

    this.submitMessage = this.submitMessage.bind(this)
    this.getFeed = this.getFeed.bind(this)

  }

  componentDidMount () {
    getFeed()

  }

  getFeed () {

  }

  submitMessage(e) {
    e.preventDefault()
    // post request to db
    console.log('e: ', e.target[0].value)
  }


  render() {

    return (<div id="chat-container">
      CHAT
      <form onSubmit={this.submitMessage}>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Message"></input>
        <input type="submit" value="Post"></input>
      </form>

    </div>)

  }
}

export default ChatContainer;