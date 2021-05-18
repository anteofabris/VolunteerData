import React from 'react';

class ZipViz extends React.Component {
  constructor(props) {
    super(props)
    const general = {
      belowAverage: "",
      average: "",
      aboveAverage: ""
    }

    this.state = {
      fill: "white",
      path: this.props.path,
      clicked: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.changeShape = this.changeShape.bind(this)
  }

  handleMouseOver() {

    this.setState({
      fill: "blue"
    })
  }

  handleMouseOut() {
    if (!this.state.clicked) {
    this.setState({
      fill: "white"
    })
  }
  }

  changeShape() {
    // var result = []
    // var tempArray = this.props.path.split(' ')
    // var startingPoint = tempArray[1] + ' '
    // for (var i = 1; i < tempArray.length - 1; i+= 1) {
    //   if (tempArray[i] === 'Z' || tempArray[i] === 'M') {
    //     result.push(tempArray[i])
    //   } else {
    //     // console.log('else')
    //   var number = Number(tempArray[i])
    //   var changed = number * 1.3
    //   var strung = changed.toString()

    //   result.push(strung)
    //   }
    // }

    // this.setState({
    //   clicked: true,
    //   path: 'M ' + result.join(' ') + ' Z',
    //   fill: 'orange'
    // })
  }

  render() {

    return (
      <svg onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} id="af-current-zip" xmlns="http://www.w3.org/2000/svg" stroke="black" fill={this.state.fill} version="1.2" baseProfile="tiny" strokeLinecap="round" strokeLinejoin="round">
        <path onClick={ () => {
          this.changeShape()
          this.props.click(this.props.zip)
        }} d={this.state.path} />
      </svg>
    )
  }
}

export default ZipViz;