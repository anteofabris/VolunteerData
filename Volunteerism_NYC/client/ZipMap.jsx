import React from 'react';
import ViewOrgs from './ViewOrgs.jsx'


class ZipMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      < div id = "af-zip-map" >
        {this.props.rankList}
</div >
    )


  }
}

export default ZipMap