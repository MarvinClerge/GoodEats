import React from 'react'
import Comment from './Comment'
import Adapter from '../adapter'

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
    return this.state.comments.slice().map(comment => {
      return <Comment {...comment} auth={this.props.auth}/>
    })
  }

  handleInputChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let user = this.props.auth.currentUser
    let content = this.state.content
    let placeId = this.props.placeId

    Adapter.createComment(user.id, content, placeId)
    .then(data => this.setState({
      comments: [...this.state.comments, {comment: data.comment, username: user.username, user_id: user.id}]
    }))
  }

  render(){
    console.log(this.state.comments);
    return(
      <div className="comments-container">
        <form onSubmit={this.handleSubmit}>
          <textarea rows="10" width="500px" onChange={this.handleInputChange} value={this.state.content}/>
          <input type="submit" value="Submit Comment" />
        </form>

        {this.state.comments ? this.handleComments() : <h1>Loading Comments</h1>}
      </div>
    )
  }
}
