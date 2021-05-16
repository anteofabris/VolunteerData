import React from 'react';

class Org extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="org">
 <div className="name">
         {this.props.name}
       </div>
       <div className="desc">
         {this.props.website}
       </div>

    </div>)
  }
}