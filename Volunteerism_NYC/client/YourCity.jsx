import React from 'react';

import ZipMap from './ZipMap.jsx';
import ZipRank from './ZipRank.jsx';

class YourCity extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      < div id = "af-your-city" >
  <ZipMap rankList={this.props.rankList}/>
  <ZipRank rankList={this.props.rankList}/>
</div >
    )
  }
}

export default YourCity;