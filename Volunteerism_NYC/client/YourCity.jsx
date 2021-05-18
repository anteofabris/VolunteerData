import React from 'react';

import ZipMap from './ZipMap.jsx';
import ZipRank from './ZipRank.jsx';

class YourCity extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('rhis is rankList: ', this.props.rankList)
    return (
      < div id = "af-your-city" >
  <ZipMap click={this.props.click} rankList={this.props.rankList}/>
  <ZipRank click={this.props.click} rankList={this.props.rankList}/>
</div >
    )
  }
}

export default YourCity;