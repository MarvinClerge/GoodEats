import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Adapter from '../adapter'
import CommentsContainer from './CommentsContainer'

class PlaceDetails extends Component {
  state = {
    place: null,
    picture: null
  }

  renderPicture = () => {
    let pictureId = this.state.place.locations.result.photos[0].photo_reference

    Adapter.getPicture(pictureId)
    .then(result => this.setState({ picture: result.picture }))
  }

  renderFavorite = () => {
    let placeId = this.state.place.locations.result.place_id

    if (this.props.auth.favorites.includes(placeId)) {
      return <button onClick={() => this.props.removeFromFavorites(placeId)}>Remove From Favorites</button>
    } else {
      return <button onClick={() => this.props.addToFavorites(placeId)}>Add to Favorites</button>
    }
  }

  componentDidMount(){
    Adapter.getPlace(this.props.match.params.placeId)
    .then(newPlace => {
      let pictureId = newPlace.locations.result.photos[0].photo_reference

      Adapter.getPicture(pictureId)
      .then(result => this.setState({ picture: result.picture, place: newPlace }))
    })
  }

  render(){
    if (!this.state.place) return <h1>Loading</h1>

    const {icon,
      name,
      vicinity,
      price_level,
      rating,
      opening_hours,
      formatted_address,
      formatted_phone_number,
      website,
      photos,
      place_id} = this.state.place.locations.result

    return(
      <div className="place-details">
        <Link to='/'>Go Back</Link>
        <img src={icon} />
        <p>Name: {name}</p>
        {this.props.auth.loggedIn ? this.renderFavorite() : <h1>Not loggedIn</h1>}
        <p>Address: {vicinity}</p>
        <p>Price Level: {price_level}</p>
        <p>Rating: {rating}</p>
        {opening_hours ? <p>{opening_hours.open_now.toString()}</p> : <p>Google It</p>}
        {opening_hours ? opening_hours.weekday_text.map(day => <p>{day}</p>) : <p>Google It</p>}
        <p>{formatted_address}</p>
        <p>{formatted_phone_number}</p>
        <p>{website}</p>
        {this.state.picture ? <img src={this.state.picture} alt={`Image from ${name}`}/> : <p>No Image</p> }

        <CommentsContainer placeId={place_id}/>
      </div>
    )
  }
}

export default withRouter(PlaceDetails)
