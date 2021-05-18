import React from 'react';
import ViewOrgs from './ViewOrgs.jsx';
// import { Map, Marker } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
// import data from 'react-svg-loader!./data/nyc-zip-geojson.svg'
import { geoAlbersUsa } from "d3-geo";
import axios from 'axios';
import ZipViz from './ZipViz.jsx';
import TopTitle from './TopTitle.jsx';

class ZipMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataReceived: false,
      zipPaths: null
    }

  }


  componentDidMount() {

    axios.get('/zipPaths')
      .then((response) => {
        // console.log('gout our data in ZipMap!: ', response.data)
        this.setState({
          zipPaths: response.data,
          dataReceived: true
        })
      })


  }

  render() {

if (this.state.dataReceived) {
  // console.log('zip paths: ', this.state.zipPaths)
    return (<div id="af-map">
      <svg width="1000" height="800" viewBox="0 0 800 555">
        <g id="nyc-zip-geojson">
          {this.state.zipPaths.map((zip, index) => {
           return <ZipViz handleHoverOut={this.props.handleHoverOut} handleHover={this.props.handleHover} click={this.props.click} path={zip.zipPath} zip={zip.zip_code} key={index} index={index}/>
          })}

        </g>
      </svg>

    </div>
    );
        } else {
          return null;
        }


  }
}

export default ZipMap;