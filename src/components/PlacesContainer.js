import React from 'react'
import PlaceCard from './PlaceCard'
import '../css/PlacesContainer.css'

const PlacesContainer = props => {

  let places;
  if (props.places) {
    if (props.places.locations.results.length === 0) {
      places = <h1>No result within this distance</h1>

    } else {
      places = props.places.locations.results.map(place => {
        return <PlaceCard key={place.id} {...place} getPlace={props.getPlace}/>
      })
    }
  }



  return(
    <div>
      {props.places ? <div className="places-container">{places}</div> : <h1>No locations</h1>}
    </div>
  )
}


export default PlacesContainer;
