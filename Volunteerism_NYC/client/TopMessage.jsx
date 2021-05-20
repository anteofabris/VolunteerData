import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { FaComments } from 'react-icons/fa'

class TopMessage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (<div id="message-container" >
      <div id="judgement">
        <div id="comments-option">
          <FaComments id="comments-icon" onClick={() => this.props.toggleComments(this.props.message)} />
        </div>
        <FiThumbsDown onClick={() => this.props.changeScore(this.props.message._id, -1)} />
          {this.props.message.score}
        <FiThumbsUp onClick={() => this.props.changeScore(this.props.message._id, 1)} />
      </div>

      <div id="message-title">
        <strong>{this.props.message.zip_code}: "{this.props.message.title}"</strong> <br />
      </div>
      <div id="message-content">
        <em>{this.props.message.message}</em>
      </div>



    </div>)
  }
}

export default TopMessage