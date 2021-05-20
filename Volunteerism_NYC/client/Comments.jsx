import React from 'react';
import axios from 'axios';
import Comment from './Comment.jsx'

class Comments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: null
    }
    this.getComments = this.getComments.bind(this)
    this.postComment = this.postComment.bind(this)
    this.changeScore = this.changeScore.bind(this)
  }

  componentDidMount() {

  }

  postComment(e) {
    console.log('this is e.target[0].value', e.target[0].value)
    e.preventDefault()

    var obj = {
      message_id: this.props.message._id,
      zip_code: this.props.message.zip_code,
      comment: e.target[0].value,
      score: 0,
      date_created: new Date()
    }
    // axios post
    axios.post(`/comments/${this.props.message._id}`, obj)
      .then(() => {
        console.log('posted!')
        this.getComments()
      })
      .catch((err) => {
        console.log('err!')
      })

  }

  getComments() {
    console.log('this id: ', this.props.message._id)
    axios.get(`/comments/${this.props.message._id}`)
      .then((response) => {
        console.log('got comments!: ', response.data)
        this.setState({
          comments: response.data
        })
      })
      .catch((err) => {
        console.log('error getting comments: ', err)
      })
  }

  changeScore(id, num) {
    //console.log('current_id: ', id)
    var obj = {num: num}
    axios.post(`/comments/changeScore/${id}`, obj)
    .then(() => {
      console.log('score changed!')
      this.getComments()
    })
    .catch((err) => {
      console.log('err in Comments changescore', err)
    })

  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      if (this.props.message) {
      console.log('in comments here is message!', this.props.message)
      this.getComments()
      }
    }
  }


  render() {
    if (this.props.commentsStyle.width === '0px') {
      return (<div style={this.props.commentsStyle} id="comments-window"></div>)
    } else {
      if (this.state.comments) {
        console.log('we should be mapping')
      return (<div style={this.props.commentsStyle} id="comments-window">
        <strong>{this.props.message.title}</strong> <br />
        <em>{this.props.message.message}</em>
        <form onSubmit={this.postComment}>
          <input type="text" placeholder="Write a Comment"></input>
          <input type="submit" value="add comment"></input>
        </form>
        {this.state.comments.map((comm, index) => {
        return  <Comment changeScore={this.changeScore} comment={comm} key={index} />
        })}
      </div>)
      } else {
        return null;
      }
    }
  }
}

export default Comments