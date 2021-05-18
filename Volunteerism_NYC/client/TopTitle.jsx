import React from 'react';
import axios from 'axios';

class TopTitle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null
    }
    this.getTitle = this.getTitle.bind(this)
  }

  getTitle() {
    //axios get for top title by zip
    axios.get(`/topTitle/${this.props.zip}`)
      .then((response) => {
        //console.log('top title: ', response.data)
        this.setState({
          title: response.data
        })
      })
  }

  componentDidMount() {
    // if this.props.zip
    if (this.props.zip) {
      this.getTitle()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.zip !== prevProps.zip) {
      this.getTitle()
    }
  }

  render() {
    if (this.props.zip) {
      return (<div id="top-title">{this.state.title}</div>)
    } else {
      return null
    }
  }
}

export default TopTitle