import React from 'react'
import Comment from './Comment'
import Adapter from '../adapter'

export default class CommentsContainer extends React.Component {
  state = {
    comments: null
  }

  componentDidMount(){
    Adapter.getComments(this.props.placeId)
    .then(data => {
      this.setState({ comments: data.comments })
    })
  }

  handleComments = () => {
    return this.state.comments.map(comment => {
      return <Comment {...comment}/>
    })
  }

  render(){
    return(
      <div className="comments-container">
        {this.state.comments ? this.handleComments() : <h1>Loading Comments</h1>}
      </div>
    )
  }
}
