import React, { Component } from 'react'

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
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
  }

  render(){
    return(
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" onChange={this.onChange}/>
          <input type="password" name="password" onChange={this.onChange}/>
        </form>

        <a href="" onClick={this.onClick}>or signup</a>
      </div>
    )
  }
}

export default Login;
