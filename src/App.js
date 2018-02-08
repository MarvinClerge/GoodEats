import React from 'react'
import Search from './components/Search'
import PlacesContainer from './components/PlacesContainer'

import API_KEY from './keys'

let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
let location = '&location=40.7052569,-74.0162643'
let radius = '&radius=100'
let type = '&type=restaurant'


let url2 = 'https://maps.googleapis.com/maps/api/place/details/json'
let placeId = "&placeid=ChIJjUw7LxJawokRByGsMS3I1Xc"

export default class App extends React.Component {
  state = {
    places: null
  }

  getLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      return null
    }
  }

  showPosition = (position) => {
    return `&location=${position.coords.latitude},${position.coords.longitude}`
  }

  handleSearch = (type, radius) => {
    console.log(radius);
    fetch(`http://localhost:3001/api/v1/places?type=${type}&radius=${radius}`)
    .then(res => res.json())
    .then(data => this.setState({ places: data }))
  }

  render() {
    return(
      <div className='app'>
        <Search handleSearch={this.handleSearch}/>
        <PlacesContainer places={this.state.places} />
      </div>
    )
  }
}
