import React from 'react';
import ChatContainer from './ChatContainer.jsx';
import ViewOrgs from './ViewOrgs.jsx';



class ZipContainer extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    if (this.props.zip) {
      return (<div id="zip-container">
        {this.props.zip}
        <ChatContainer zip={this.props.zip} />
        <ViewOrgs zip={this.props.zip} />
      </div>)
    } else {
      return (<div id="zip-container">pick a zip</div>)
    }
  }
}

export default ZipContainer;