import React, { Component } from 'react'
import Adapter from '../../adapter'
import Error from '../../error'

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
    Adapter.signup(this.state)
    .then(response => {
      if (!response.user) {
        Error.signup(response)
      } else {
        this.props.setUser(response)
        this.props.change()
      }
    })
  }

  render(){
    return(
      <div className="signup">
        <h1 className='auth-title'>Signup</h1>
        <form className='auth-form' onSubmit={this.onSubmit}>
          <label htmlFor="username" className='auth-label'>Username</label>
          <input
            type="text"
            className='auth-input'
            id="username"
            onChange={this.onChange}/>

          <label htmlFor="password" className='auth-label'>Password</label>
          <input
            type="password"
            className='auth-input'
            id="password"
            onChange={this.onChange}/>

          <label htmlFor="passwordConfirmation" className='auth-label'>Confirm Password</label>
          <input
            type="password"
            className='auth-input'
            id="passwordConfirmation"
            onChange={this.onChange}/>

          <input type="submit" value="Create Account" className='auth-submit'/>
        </form>

        <a href="" onClick={this.onClick}>or login</a>
      </div>
    )
  }
}

export default Signup;
