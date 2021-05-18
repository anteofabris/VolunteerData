import React from 'react';

class Org extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="org">
  <div className="link">
       <a href={this.props.org.website} target="_blank">{this.props.org.org_name}</a>
       </div>
       <div className="desc">
         {this.props.org.description}
       </div>


    </div>)
  }
}

export default Org;