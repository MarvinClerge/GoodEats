import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

import Login from './Login'

class NavBar extends Component {
  render(){
    return(
      <div className='navbar'>

        <Link to='/'>
          <div>
            <h1 className='title'>Good Eats</h1>
          </div>
        </Link>

        <div className="login">
          <Login
            {...this.props.auth}
            handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout} />
        </div>
      </div>
    )
  }
}

export default NavBar;
