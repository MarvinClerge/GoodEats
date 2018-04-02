import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import '../css/NavBar.css'
import Auth from './auth/Auth'

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

        <Auth />
      </div>
    )
  }
}

export default NavBar;
