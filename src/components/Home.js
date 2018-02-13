import React, {Component} from 'react'
import Adapter from '../adapter'
import Search from './Search'
import PlacesContainer from './PlacesContainer'

export default class Home extends Component {

  componentDidMount() {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(( position ) => {
        let newPosition = `${position.coords.latitude},${position.coords.longitude}`
        Adapter.initalSearch( position )
        .then( newPlaces => this.props.initializePlaces(newPlaces, newPosition) )
      })
    } else {
      return null
    }
  }

  loginOrPlaces = () => {
    if (!this.props.auth.loggedIn) {
      return <h1>Please Login</h1>
    } else {
      return <h1>Welcome</h1>
    }
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Search
          handleSubmit={this.props.handleSubmit}
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout} />
        {this.loginOrPlaces()}
        <PlacesContainer
          {...this.props.places} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
      </div>
    )
  }
}
