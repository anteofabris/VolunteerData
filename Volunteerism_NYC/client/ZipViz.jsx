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
    this.checkIfSelected = this.checkIfSelected.bind(this)
  }

  checkIfSelected () {
    if (this.props.zipSelected === this.props.zip_code) {
      console.log('yes updated!')
      this.setState ({
        fill: 'red'
      })
    }
  }

  componentDidMount() {
   // console.log('mounted')
    this.checkIfSelected()

  }

  componentDidUpdate(prevProps) {
    console.log('update?')
    if (this.props.zipSelected !== prevProps.zipSelected) {

      this.checkIfSelected()
    }


  }

  handleMouseOver() {
    // console.log('this zip:', this.props.zip)
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

  //   if (!this.state.clicked) {

  //   this.setState({
  //     clicked: true,
  //     // path: 'M ' + result.join(' ') + ' Z',
  //     fill: 'blue'
  //   })
  // }

  }

  render() {

    return (
      <svg onMouseOver={() => {
        this.handleMouseOver()
        this.props.handleHover(this.props.zip)

      }} onMouseOut={() => {
        this.handleMouseOut()
        this.props.handleHoverOut()
      }} id="af-current-zip" xmlns="http://www.w3.org/2000/svg" stroke="black" fill={this.state.fill} version="1.2" baseProfile="tiny" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".4">


        <path onClick={() => {
          console.log('clicked!', this.props.zip)
          this.props.change(this.props.zip)
          this.props.click(this.props.zip)
        }} d={this.state.path} />
      </svg>
    )
  }
}

export default ZipViz;