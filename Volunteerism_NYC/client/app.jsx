import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import ChooseCity from './ChooseCity.jsx';
import YourCity from './YourCity.jsx';
import ZipContainer from './ZipContainer.jsx';
import Comments from './Comments.jsx';
import IntroBar from './IntroBar.jsx';


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
      zipList: [],
      hoveredZip: null,
      selectedZip: null,
      commentsStyle: { width: '0px' },
      selectedMessage: null,
    }
    this.renderHoveredZip = this.renderHoveredZip.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleComments = this.toggleComments.bind(this)
  }

  componentDidMount() {

    axios.get('/zipPaths')
      .then((response) => {
        console.log('got response: ', response)
        this.setState({
          isChosen: true,
          dataReceived: true,
          zipList: response.data
        })
      })
      .catch((err) => {
        console.log('err in app.jsx: ', err)
      })

  }

  toggleComments(msg) {
    if (this.state.commentsStyle.width === '0px') {
      this.setState({
        commentsStyle: { width: '1200px' },
        selectedMessage: msg
      })
    } else {
      this.setState({
        commentsStyle: { width: '0px' },
        selectedMessage: null
      })
    }
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
        <IntroBar />
        <div id="rest-of-app">
          <YourCity click={this.handleClick} zipList={this.state.zipList} />
          <ZipContainer toggleComments={this.toggleComments} zip={this.state.selectedZip} />
          <Comments message={this.state.selectedMessage} commentsStyle={this.state.commentsStyle} />
        </div>
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
//     <YourCity click={this.handleClick} zipList={this.state.zipList} />
//     <ZipContainer zip={this.state.zip}/>
//   </div>)
// } else {
//   return (<div id="app">
//     <YourCity zipList={this.state.zipList} />
//     <ZipContainer zip={this.state.zip}/>
//   </div>);
// }
// return (<div>nothing</div>);
// }