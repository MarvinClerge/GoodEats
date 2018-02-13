import React, {Component} from 'react'
import '../css/PlaceCard.css'
import { Link } from 'react-router-dom';

export default class PlaceCard extends Component {


  renderFavorite = () => {
    let placeId = this.props.place_id

    if (this.props.auth.favorites.includes(placeId)) {
      return <button onClick={() => this.props.removeFromFavorites(placeId)}>Remove From Favorites</button>
    } else {
      return <button onClick={() => this.props.addToFavorites(placeId)}>Add to Favorites</button>
    }
  }

  render(){
    const {place_id, icon, name, vicinity, price_level, rating, opening_hours} = this.props
    return(
      <div id={place_id} className="place-card">
        <Link to={`/place/${place_id}`}>
          <img src={icon} alt="icon"/>
          <p>Name: {name}</p>
        </Link>
        <p>Address: {vicinity}</p>
        <p>Price Level: {price_level}</p>
        <p>Rating: {rating}</p>
        {opening_hours ? <p>{opening_hours.open_now.toString()}</p> : <p>Google It</p>}
        {this.props.auth.loggedIn ? this.renderFavorite() : <h1>Not loggedIn</h1>}
      </div>
    )
  }
}
