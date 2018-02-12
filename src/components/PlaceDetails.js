import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Adapter from '../adapter'

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
      photos} = this.state.place.locations.result

      console.log(this.props);

    return(
      <div className="place-details">
        <Link to='/'>Go Back</Link>
        <img src={icon} />
        <p>Name: {name}</p>
        <p>Address: {vicinity}</p>
        <p>Price Level: {price_level}</p>
        <p>Rating: {rating}</p>
        {opening_hours ? <p>{opening_hours.open_now.toString()}</p> : <p>Google It</p>}
        {opening_hours ? opening_hours.weekday_text.map(day => <p>{day}</p>) : <p>Google It</p>}
        <p>{formatted_address}</p>
        <p>{formatted_phone_number}</p>
        <p>{website}</p>
        {this.state.picture ? <img src={this.state.picture} alt={`Image from ${name}`}/> : <p>No Image</p> }
      </div>
    )
  }
}

export default withRouter(PlaceDetails)
