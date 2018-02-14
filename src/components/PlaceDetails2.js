import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Adapter from '../adapter'
import CommentsContainer from './CommentsContainer2'
import '../css/PlaceDetails.css'

class PlaceDetails extends Component {
  state = {
    place: null,
    picture: null,
  }

  componentDidMount(){
    Adapter.getPlace(this.props.match.params.placeId)
    .then(newPlace => {
      let pictureId = newPlace.locations.result.photos[0].photo_reference

      Adapter.getPicture(pictureId)
      .then(result => this.setState({ picture: result.picture, place: newPlace }))
    })
  }

  renderPicture = () => {
    let pictureId = this.state.place.locations.result.photos[0].photo_reference

    Adapter.getPicture(pictureId)
    .then(result => this.setState({ picture: result.picture }))
  }

  renderFavorite = () => {
    let placeId = this.state.place.locations.result.place_id

    if (this.props.favorites.includes(placeId)) {
      return <button onClick={() => this.props.removeFromFavorites(placeId)}>-</button>
    } else {
      return <button onClick={() => this.props.addToFavorites(placeId)}>+</button>
    }
  }

  renderStatus = () => {
    if (this.state.place.locations.result.opening_hours.open_now) {
      return <p>Open Now</p>
    } else {
      return <p>Closed</p>
    }
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
        {this.props.auth.loggedIn ? this.renderFavorite() : null}

        <div className='header'>
          <img src={icon} />
          <h1>{name}</h1>
        </div>

        <div className="info">
          <h3>Information</h3>
          <div>
            <p>{formatted_address}</p>
            <p>{formatted_phone_number}</p>
            <p>{website}</p>
          </div>
        </div>

        <div className='info2'>
          <h3>Rating and Price Level</h3>
          <div>
            <p>Price Level: {price_level}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>

        <div className='info3'>
          <h3>Hours</h3>
          <div>
            {opening_hours ? opening_hours.weekday_text.map(day => <p>{day}</p>) : null}
          </div>
        </div>

        <div className='info4'>
          <h3>Images</h3>
          <div>
            {this.state.picture ? <img src={this.state.picture} alt={`Image from ${name}`}/> : <p>Image Missing</p> }
          </div>
        </div>


        <CommentsContainer placeId={place_id} auth={this.props.auth} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default withRouter(PlaceDetails)
