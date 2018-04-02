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
      // remove compenent here
    }
  }

  toggleState = () => {
    this.setState({
      login: !this.state.login
    })
  }

  renderComponent = () => {
    if (this.state.login) {
      return <Login toggleState={this.toggleState} />
    } else {
      return <Signup toggleState={this.toggleState} />
    }
  }

  render(){
    return(
      <div className="auth" onClick={this.onClick}>
        <div className="content">
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default Auth;
