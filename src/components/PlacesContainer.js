import React, {Component} from 'react'
import PlaceCard from './PlaceCard'
import '../css/PlacesContainer.css'

export default class PlacesContainer extends Component {
  handlePlaces = () => {
    if (this.props.locations) {
      let places = this.props.locations.results
      console.log(this.props);

      if (places.length === 0) {
        return <h1>No Results</h1>
      } else {
        return places.map(place => <PlaceCard key={place.id} {...place}/>)
      }
    }
  }

  render(){
    if (!this.props.locations) return <h1>Loading</h1>
    return(
      <div className="place-container">{this.handlePlaces()}</div>
    )
  }
}
