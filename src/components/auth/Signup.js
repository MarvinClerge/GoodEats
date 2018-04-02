import React, { Component } from 'react'

import './../../css/auth/signup.css'

class Signup extends Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  onClick = event => {
    event.preventDefault()
    this.props.toggleState()
  }

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
  }

  render(){
    return(
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={this.onChange}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.onChange}/>

          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input type="password" id="passwordConfirmation" onChange={this.onChange}/>
        </form>

        <a href="" onClick={this.onClick}>or login</a>
      </div>
    )
  }
}

export default Signup;
