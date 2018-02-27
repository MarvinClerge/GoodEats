import React, {Component} from 'react'
import '../css/PlaceCard.css'
import { Link } from 'react-router-dom';

export default class PlaceCard extends Component {

  renderFavorite = () => {
    let placeId = this.props.place_id

    if (this.props.favorites.includes(placeId)) {
      return <button onClick={() => this.props.removeFromFavorites(placeId)}>-</button>
    } else {
      return <button onClick={() => this.props.addToFavorites(placeId)}>+</button>
    }
  }

  renderStatus = () => {
    if (this.props.opening_hours.open_now) {
      return <p>Open Now</p>
    } else {
      return <p>Closed</p>
    }
  }

  render(){
    const {place_id, icon, name, vicinity, price_level, rating, opening_hours} = this.props
    return(
        <div id={place_id} className="place-card">
          <div className='icon'>
            <Link to={`/place/${place_id}`}>
              <img src={icon} alt="icon" />
            </Link>
          </div>
          <div className='info'>
            <div className='name'>
              <Link to={`/place/${place_id}`}>
                <h1>{name}</h1>
              </Link>
            </div>

            <span>{vicinity} | {rating} stars | Price level:{price_level} {this.props.auth.loggedIn ? this.renderFavorite() : null} </span>

        {opening_hours ? this.renderStatus() : null}
      </div>
      </div>
    )
  }
}
