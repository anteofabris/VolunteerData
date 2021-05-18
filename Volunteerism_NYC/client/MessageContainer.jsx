import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'

class MessageContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (<div id="message-container">
      <strong>{this.props.message.title}</strong> <br />
      <em>{this.props.message.message}</em>
      <div id="judgement">
        <FiThumbsDown onClick ={() => this.props.changeScore(this.props.message._id, -1)}/>
        <FiThumbsUp onClick ={() => this.props.changeScore(this.props.message._id, 1)}/>
      </div>
    </div>)
  }
}

export default MessageContainer