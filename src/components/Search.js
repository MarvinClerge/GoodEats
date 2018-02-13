import React, {Component} from 'react'

export default class Search extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit()
  }


  handleLoginChange = (event) => {
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

  handleForm = (event) => {
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleForm}>
          <input type='text' name='username' placeholder='Username' onChange={this.handleLoginChange}></input>
          <input type='password' name='password' placeholder='Password' onChange={this.handleLoginChange}></input>
          <input type='submit' value='Sign In' onClick={this.handleLogin}></input>
          <input type='submit' value='Log Out' onClick={this.handleLogout}></input>
        </form>
        <form onSubmit={this.handleSubmit}>
          <input type="number" id="radius" defaultValue="1000"/>

          <select id="type">
            <option value="restaurant" defaultValue >restaurant</option>
            <option value="bar">bar</option>
          </select>

          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}
