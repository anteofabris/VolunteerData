import React from 'react';
import Zip from './Zip.jsx'
import ViewOrgs from './ViewOrgs.jsx'


class ZipRank extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      < div id = "af-zip-rank" >
        {this.props.zipList.map((zip, index) =>
        <Zip zip={zip} key={index} rank={index + 1}/>
        )}
</div >
    )


  }
}

export default ZipRank;