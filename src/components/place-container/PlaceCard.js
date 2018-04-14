import React from 'react'

const PlaceCard = props => {
  console.log(props);

  return(
    <div className='place-card'>
      <h1>{props.name}</h1>
      <p>{props.vicinity}</p>
      <p>{props.rating} ⭐⭐⭐⭐⭐ {props.price_level}</p>
    </div>
  )
}

export default PlaceCard
