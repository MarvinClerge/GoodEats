import React, { Component } from 'react'

import './../../css/auth/login.css'

class Login extends Component {

  state = {
    username: "",
    password: ""
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
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={this.onChange}
            value={this.state.username}/>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={this.onChange}
            value={this.state.password}/>
        </form>

        <a href="" onClick={this.onClick}>or signup</a>
      </div>
    )
  }
}

export default Login;
