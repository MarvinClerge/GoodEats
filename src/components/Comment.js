import React from 'react'

export default class Comment extends React.Component {

  render() {
    console.log(this.props);
    return(
      <h1>{this.props.content}</h1>
    )
  }
}
