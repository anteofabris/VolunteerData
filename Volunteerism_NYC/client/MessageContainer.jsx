import React from 'react';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (<div id="message-container">
      <strong>{this.props.message.title}</strong> <br/>
      <em>{this.props.message.message}</em>
    </div>)
  }
}

export default MessageContainer