import React from 'react';

import ZipMap from './ZipMap.jsx';
import ZipRank from './ZipRank.jsx';
import TopTitle from './TopTitle.jsx';

class YourCity extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentZip: '0'
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleHoverOut = this.handleHoverOut.bind(this)
  }

  handleHover(zip) {
    console.log('zip: ', zip)
    this.setState({
      currentZip: zip
    })
  }

  handleHoverOut() {
    this.setState({
      currentZip: '0'
    })
  }

  render() {
    // console.log('rhis is rankList: ', this.props.rankList)

    return (
      < div id="af-your-city" >
        <TopTitle zip={this.state.currentZip}/>
        <ZipMap click={this.props.click} zipList={this.props.zipList} handleHover={this.handleHover} handleHoverOut={this.handleHoverOut} />
        {/* <ZipRank click={this.props.click} zipList={this.props.zipList} /> */}
      </div >
    )





  }
}

export default YourCity;