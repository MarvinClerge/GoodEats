import React, { Component } from 'react'

import Login from './Login'
import Signup from './Signup'

class Auth extends Component {

  state = {
    login: false
  }

  toggleState = () => {
    this.setState({
      login: !this.state.login
    })
  }

  render(){
    if (this.state.login) {
      return(
        <div className="auth">
          <Login toggleState={this.toggleState} />
        </div>
      )
    } else {
      return(
        <div className="auth">
          <Signup toggleState={this.toggleState} />
        </div>
      )
    }
  }
}

export default Auth;
