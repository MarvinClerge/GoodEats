import React from 'react'
import '../css/Comment.css'
import Adapter from '../adapter'

export default class Comment extends React.Component {
  state = {
    editing: false,
    comment: this.props.comment,
    content: ""
  }

  isCurrentUser = () => {
    if (this.props.currentUser) {
      return this.props.user_id === this.props.currentUser.id
    } else {
      return false
    }
  }

  renderEdit = () => {
    if (this.state.editing) {
      return <button onClick={this.toggleEdit}>Cancel</button>
    } else {
      return <button onClick={this.toggleEdit}>Edit</button>
    }
  }

  renderDelete = () => {
    return <button onClick={this.delete}>Delete</button>
  }

  delete = () => {
    this.props.removeComment(this.state.comment)
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let comment = this.state.comment
    let content = this.state.content

    Adapter.updateComment(comment.id, content)
    .then(data => this.setState({
      comment: {...comment, content: content},
      editing: false
    }))

  }

  handleInputChange = (event) => {
    this.setState({ content: event.target.value})
  }

  renderForm = () => {
    if (this.state.editing) {
      return(
        <form onSubmit={this.handleSubmit}>
          <textarea rows="10" value={this.state.content} onChange={this.handleInputChange}/>
          <input type="submit" value="Change Comment" />
        </form>
      )
    }
  }

  render() {
    return(
      <div className='comment'>
        <p>{this.props.username}</p>
        {this.renderForm()}
        <p>Comment: {this.state.comment.content}</p>
        {this.isCurrentUser() ? this.renderEdit() : null}
        {this.isCurrentUser() ? this.renderDelete() : null}
      </div>
    )
  }
}
