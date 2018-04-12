import React, { Component } from 'react'

import Login from './Login'
import Signup from './Signup'

import './../../css/auth/auth.css'

class Auth extends Component {

  state = {
    login: false
  }

  onClick = event => {
    if (event.target.className === "auth") {
      this.props.change()
    }
  }

  toggleState = () => {
    this.setState({
      login: !this.state.login
    })
  }

  renderComponent = () => {
    if (this.state.login) {
      return (
        <Login
          change={this.props.change}
          setUser={this.props.setUser}
          toggleState={this.toggleState} />
      )
    } else {
      return (
        <Signup
          change={this.props.change}
          setUser={this.props.setUser}
          toggleState={this.toggleState} />
      )
    }
  }

  render() {
    return (
      <div className="auth" onClick={this.onClick}>
        <div className="auth-content">
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default Auth;
