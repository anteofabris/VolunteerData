import React from 'react';
import Org from './Org.jsx';


class ViewOrgs extends React.Component {
  constructor(props) {
    super (props)
  }

  render () {
    return(<div id="orgs-list">
      {this.props.orgsList.map((org, index) =>
      <Org org={this.props.org} key ={index}/>
      )}

    </div>)
  }
}