import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

import Login from './Login'

class NavBar extends Component {
  render(){
    return(
      <div className='navbar'>

        <Link to='/' className="title">
          <div>
            <span>yerp</span>
            <img src={require('../images/icon.png')} width="50px" height="50px"/>
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
