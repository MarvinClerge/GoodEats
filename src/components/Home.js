import React, {Component} from 'react'

import Adapter from '../adapter'
import Search from './Search2'
import PlacesContainer from './PlacesContainer'

class Home extends Component {
  // window.location.pathname === '/'

  componentDidMount() {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(( position ) => {
        let newPosition = `${position.coords.latitude},${position.coords.longitude}`
        Adapter.initalSearch( position )
        .then( newPlaces => this.props.initialize(newPlaces, newPosition) )
      })
    } else {
      return null
    }
  }

  render(){
    return(
      <div className='home'>
        <Search handleSearch={this.props.handleSearch} />
        {/* <PlacesContainer places={this.props.places} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} favorites={this.props.favorites} auth={this.props.auth}/> */}
      </div>
    )
  }
}

export default Home;
