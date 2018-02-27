import React from 'react'
import Comment from './Comment2'
import Adapter from '../adapter'
import '../css/CommentsContainer.css'

export default class CommentsContainer extends React.Component {
  state = {
    comments: null,
    content: ""
  }

  componentDidMount(){
    Adapter.getComments(this.props.placeId)
    .then(data => {
      this.setState({ comments: data.comments })
    })
  }

  handleComments = () => {
    return this.state.comments.slice().reverse().map(comment => {
      console.log(comment.comment.id);
      return <Comment {...comment} key={comment.comment.id} auth={this.props.auth} currentUser={this.props.currentUser} removeComment={this.removeComment}/>
    })
  }

  handleInputChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let user = this.props.currentUser
    let content = this.state.content
    let placeId = this.props.placeId

    Adapter.createComment(user.id, content, placeId)
    .then(data => this.setState({
      comments: [...this.state.comments, {comment: data.comment, username: user.username, user_id: user.id}]
    }))
  }

  removeComment = (comment) => {
    Adapter.destroyComment(comment.id)
    .then(data => {
      if (data.message) {
        let newComments = this.state.comments.filter(comm => {
          return comm.comment.id !== comment.id
        })

        this.setState({ comments: newComments })
      }
    })
  }

  render(){
    return(
      <div className="comments-container">
        <div clasName="new-comment">
          <h3>New Comment</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea rows="10" onChange={this.handleInputChange} value={this.state.content} id="content"/>
            <br />
            <input type="submit" value="Submit Comment" />
          </form>
        </div>

        {this.state.comments ? this.handleComments() : <h1>Loading Comments</h1>}
      </div>
    )
  }
}
