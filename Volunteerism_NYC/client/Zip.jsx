import React from 'react';

class Zip extends React.Component {
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
       {this.props.name}
     </div>
     <div id="population">
     <div className="desc-small">
         Population:
       </div>
       {this.props.population}
     </div>
     <div id="ranking">
       <div className="desc">
         Rank
       </div>
       {this.props.rank}
     </div>
      )

    </div>)
  }
}