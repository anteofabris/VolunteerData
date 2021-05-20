import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

class Comment extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (<div id="single-comment">
      {this.props.comment.comment}
      <div id="comment-judgement">
        <FiChevronUp onClick={() => this.props.changeScore(this.props.comment._id, 1)}/>
        {this.props.comment.score}
        <FiChevronDown onClick={() => this.props.changeScore(this.props.comment._id, -1)}/>
      </div>

    </div>)
  }
}

export default Comment;