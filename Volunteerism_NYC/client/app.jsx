import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import ChooseCity from './ChooseCity.jsx';
import YourCity from './YourCity.jsx';
import ZipContainer from './ZipContainer.jsx';

// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// // import mapdata from '../data/nyc-zip-geojson.json';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChosen: false,
      dataReceived: false,
      rankList: [],
      hoveredZip: null,
      selectedZip: null
    }
    this.renderHoveredZip = this.renderHoveredZip.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    axios.get('/zipPaths')
      .then((response) => {
        console.log('got response: ', response)
        this.setState({
          isChosen: true,
          dataReceived: true,
          rankList: response.data
        })
      })
      .catch((err) => {
        console.log('err in app.jsx: ', err)
      })

  }

  renderHoveredZip(e) {


  }

  handleClick(zip) {
    console.log('clicked on zip!', zip)
    this.setState({
      selectedZip: zip
    })
  }

  render() {

    if (this.state.dataReceived) {
      return (<div id="app">
        <YourCity click={this.handleClick} rankList={this.state.rankList} />
        <ZipContainer zip={this.state.selectedZip} />
      </div>)
    } else {
      return null;
    }

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// if (!this.state.isChosen) {

// } else if (this.state.dataReceived) {
//   return (<div id="app">
//     <YourCity click={this.handleClick} rankList={this.state.rankList} />
//     <ZipContainer zip={this.state.zip}/>
//   </div>)
// } else {
//   return (<div id="app">
//     <YourCity rankList={this.state.rankList} />
//     <ZipContainer zip={this.state.zip}/>
//   </div>);
// }
// return (<div>nothing</div>);
// }