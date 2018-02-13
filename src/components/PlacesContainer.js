import React, {Component} from 'react'
import PlaceCard from './PlaceCard'
import '../css/PlacesContainer.css'

// change this to one function?

export default class PlacesContainer extends Component {
  handlePlaces = () => {
    if (this.props.locations) {
      let places = this.props.locations.results

      if (places.length === 0) {
        return <h1>No Results</h1>
      } else {
        return places.map(place => <PlaceCard key={place.id} {...place} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} auth={this.props.auth}/>)
      }
    }
  }

  handleFavorites = () => {
    if (this.props.locations) {
      let places = this.props.locations.results

      if (places.length === 0) {
        return null
      } else {
        places = places.filter(place => this.props.auth.favorites.includes(place.place_id))
        places = places.map(place => <PlaceCard key={place.id} {...place} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} auth={this.props.auth}/>)
        return places
      }
    }
  }

  render(){
    if (!this.props.locations) return <h1>Loading</h1>

  return(
    <div>
      <div className="place-container1">
        <h1>Favorites</h1>
        {this.handleFavorites()}
      </div>

      <div className="place-container2">
        {this.handlePlaces()}
      </div>
    </div>
    )
  }
}
