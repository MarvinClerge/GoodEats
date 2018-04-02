import React, {Component} from 'react'
import PlaceCard from './PlaceCard'
import '../css/PlacesContainer2.css'

export default class PlacesContainer extends Component {

  handlePlaces = () => {
    if (this.props.places) {
      let places = this.props.places.locations.results

      if (places.length === 0) {
        return <h1>No Results</h1>
      } else {
        return places.map(place => <PlaceCard key={place.id} {...place} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} favorites={this.props.favorites} auth={this.props.auth}/>)
      }
    }
  }

  handleFavorites = () => {
    if (this.props.places) {
      let places = this.props.places.locations.results

      if (places.length === 0) {
        return null
      } else {
        if (this.props.auth.loggedIn) {
          places = places.filter(place => this.props.favorites.includes(place.place_id))
          places = places.map(place => <PlaceCard key={place.id} {...place} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} favorites={this.props.favorites} auth={this.props.auth}/>)
          return places
        }
      }
    }
  }

  render(){
    if (!this.props.places) return <h1 className="loading">Loading</h1>

  return(
    <div className="place-container">
      {this.props.auth.loggedIn ?
        <div className="favorites">
          <h1>Favorites</h1>
          {this.handleFavorites()}
        </div> : null
      }

      <div className="places">
        <h1>Results</h1>
        {this.handlePlaces()}
      </div>
    </div>
    )
  }
}
