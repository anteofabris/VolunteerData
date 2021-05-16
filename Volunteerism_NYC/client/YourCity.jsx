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
  <ZipMap/>
  <ZipRank/>
</div >
    )
  }
}

export default YourCity;