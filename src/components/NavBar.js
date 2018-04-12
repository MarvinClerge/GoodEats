import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import '../css/NavBar.css'
import Auth from './auth/Auth'

class NavBar extends Component {
  state = {
    active: false
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  renderAuth = () => {
    if (this.state.active) {
      return (
        <Auth
          setUser={this.props.setUser}
          change={this.toggleActive} />
      )
    }
  }

  renderUser = () => {
    if (this.props.user) {
      return (
        <button className="nav-btn">
          Welcome, <br/> {this.props.user.username}
        </button>
      )
    } else {
      return (
        <button onClick={this.toggleActive} className="nav-btn">
          Manage <br/> Account
        </button>
      )
    }
  }

  render(){
    return(
      <div className='nav'>

        <Link to='/'>
          <h1 className="nav-title">Good Eats</h1>
        </Link>


        {this.renderAuth()}

        {this.renderUser()}
      </div>
    )
  }
}

export default NavBar;
