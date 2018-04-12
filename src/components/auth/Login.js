import React, { Component } from 'react'
import Adapter from '../../adapter'
import Error from '../../error'

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
    Adapter.login(this.state)
    .then(response => {
      if (!response.user) {
        console.log('login error');
      } else {
        this.props.setUser(response)
        this.props.change()
      }
    })
  }

  render(){
    return(
      <div className="login">
        <h1 className="auth-title">Login</h1>
        <form onSubmit={this.onSubmit} className='auth-form'>
          <label htmlFor="username" className='auth-label'>Username</label>
          <input
            id="username"
            className='auth-input'
            type="text"
            onChange={this.onChange}
            value={this.state.username}/>

          <label htmlFor="password" className='auth-label'>Password</label>
          <input
            id="password"
            className='auth-input'
            type="password"
            onChange={this.onChange}
            value={this.state.password}/>

          <input type="submit" value="Login" className='auth-submit'/>
        </form>

        <a href="" onClick={this.onClick}>or signup</a>
      </div>
    )
  }
}

export default Login;
