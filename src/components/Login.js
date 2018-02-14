import React, {Component} from 'react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.state.username, this.state.password)
  }

  handleLogout = (event) => {
    event.preventDefault()
    this.props.handleLogout()
  }

  handleRender = () => {
    if (this.props.loggedIn) {
      return  <button onClick={this.handleLogout}>Log Out</button>

    } else {
      return(
        <form onSubmit={this.handleLogin}>
          <input type='text' name='username' placeholder='Username'
            value={this.state.username} onChange={this.handleInputChange} />

          <input type='password' name='password' placeholder='Password'
            value={this.state.password} onChange={this.handleInputChange} />

          <input type='submit' value='Log In' />
        </form>
      )
    }
  }

  render(){
    return(
      <div>
        {this.handleRender()}
      </div>
    )
  }
}

export default Login
