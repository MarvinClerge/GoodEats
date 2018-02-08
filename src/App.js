import React from 'react'
import {BrowserRouter}

import API_KEY from './keys'

let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
let location = '&location=40.7052569,-74.0162643'
let radius = '&radius=100'
let type = '&type=restaurant'


let url2 = 'https://maps.googleapis.com/maps/api/place/details/json'
let placeId = "&placeid=ChIJjUw7LxJawokRByGsMS3I1Xc"

export default class App extends React.Component {
  getData = () => {
    fetch(`${url2}${API_KEY}${placeId}`)
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return(
      <div className='app'>
        {this.getData()}
      </div>
    )
  }
}
