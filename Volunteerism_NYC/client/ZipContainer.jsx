import React from 'react';
import ChatContainer from './ChatContainer.jsx';



class ZipContainer extends React.Component {
  constructor(props) {
    super (props)

  }


  render () {
    if (this.props.zip) {
    return(<div id="zip-container">
     {this.props.zip}
     <ChatContainer />

    </div>)
    } else {
      return (<div id="zip-container">pick a zip</div>)
    }
  }
}

export default ZipContainer;