import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Adapter from '../adapter'
import CommentsContainer from './CommentsContainer'
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
      return <p>Now Open</p>
    } else {
      return <p>Closed</p>
    }
  }

  renderDays = () => {
    if (this.state.place.locations.result.opening_hours) {
      return this.state.place.locations.result.opening_hours.weekday_text.map(hour => {
        return(
          <tr>
            <th>{hour.split(":")[0]}</th>
            <td>{hour}</td>
          </tr>
        )
      })
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

        <div className='header'>
          <h1>{name}</h1>
          {this.renderStatus()}
          {this.props.auth.loggedIn ? this.renderFavorite() : null}
        </div>

        <div className="d-info">

          <table>
            <tr>
              <th>Address: </th>
              <td><a href={`http://maps.google.com/?q=${formatted_address}`}>{formatted_address}</a></td>
            </tr>

            <tr>
              <th>Number: </th>
              <td>{formatted_phone_number}</td>
            </tr>

            <tr>
              <th>Website: </th>
              <td><a href={website}>{website}</a></td>
            </tr>

            <tr>
              <th>Rating: </th>
              <td>{rating} stars</td>
            </tr>

            <tr>
              <th>Price Level: </th>
              <td>{price_level}</td>
            </tr>

            <tr>
              <th className="hours">Hours</th>
            </tr>
            {this.renderDays()}


          </table>
        </div>

        <div className='d-image'>
          {this.state.picture ? <img src={this.state.picture} alt={`Image from ${name}`}/> : <p>Image Missing</p> }
        </div>


        <CommentsContainer placeId={place_id} auth={this.props.auth} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default withRouter(PlaceDetails)
