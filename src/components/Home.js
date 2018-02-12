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

  render(){
    return(
      <div>
        <Search
          handleSubmit={this.props.handleSubmit} />
        <PlacesContainer
          {...this.props.places} />
      </div>
    )
  }
}
