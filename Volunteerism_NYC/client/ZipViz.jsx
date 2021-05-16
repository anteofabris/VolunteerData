import React from 'react';

class ZipViz extends React.Component {
  constructor(props) {
    super(props)
    const general = {
      belowAverage: "",
      average: "",
      aboveAverage: ""
    }
  }


  render () {
    return (<div id="af-zip-article">
     <div id="zip-name">
      <strong> {this.props.zip.zip_code} </strong>
     </div>
     <div id="population">
     <div className="desc-small">
         Population:
       </div>
       {this.props.zip.population}
     </div>
     <div id="ranking">
       <div className="desc">
         Rank:
       </div>
       {this.props.rank}
     </div>

    </div>)
  }
}

export default ZipViz;