import React from 'react'
import '../css/PlaceCard.css'

const PlaceCard = props => {

  function getPlace(event) {
    console.log(event.target.nodeName);
    props.getPlace(event.target.id)
  }

  return(
    <div className='card' id={props.place_id} onClick={getPlace}>
      <img src={props.icon} /> <br/>
      Name: {props.name} <br/>
      Address: {props.vicinity} <br/>
      Price Level: {props.price_level} <br/>
      Rating: {props.rating} <br/>
    {props.opening_hours ? props.opening_hours.open_now.toString() : <p>Google It</p>}
    </div>
  )
}


export default PlaceCard;
