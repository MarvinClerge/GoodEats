const token = localStorage.getItem('token')
const getHeaders = { 'Content-Type': 'application/json', 'Accepts': 'application/json', 'Authorization': token}

class Adapter {
  static initalSearch(position) {
    let location = `&location=${position.coords.latitude},${position.coords.longitude}`

    let typeValue = document.querySelector('#type').value
    let type = `&type=${typeValue}`

    let radiusValue = document.querySelector('#radius').value
    let radius = `&radius=${radiusValue}`

    return fetch(`http://localhost:3001/api/v1/places?${location + type + radius}`)
    .then(response => response.json())
  }

  static newSearch(position) {
    let location = `&location=${position}`
    let type = `&type=${ document.querySelector('#type').value }`
    let radius = `&radius=${ document.querySelector('#radius').value }`

    return fetch(`http://localhost:3001/api/v1/places?${location + type + radius}`)
    .then(response => response.json())
  }

  static getPlace(placeId) {
    return fetch(`http://localhost:3001/api/v1/places/${placeId}`)
    .then(response => response.json())
  }

  static getPicture(pictureId) {
    return fetch(`http://localhost:3001/api/v1/pictures/${pictureId}`)
    .then(response => response.json())
  }

  static login(username, password) {
    return fetch(`http://localhost:3001/api/v1/login`, {
      method: 'POST',
      headers: getHeaders,
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
  }

  static getCurrentUser() {
    return fetch(`http://localhost:3001/api/v1/currentuser`, {
      headers: getHeaders
    })
    .then(response => response.json())
  }

  static addToFavorites(userId, placeId) {
    return fetch(`http://localhost:3001/api/v1/addfavorite`, {
      method: 'POST',
      headers: getHeaders,
      body: JSON.stringify({userId, placeId})
    })
    .then(response => response.json())
  }

  static removeFromFavorites(userId, placeId) {
    return fetch(`http://localhost:3001/api/v1/removefavorite`, {
      method: 'DELETE',
      headers: getHeaders,
      body: JSON.stringify({userId, placeId})
    })
    .then(response => response.json())
  }

}

export default Adapter;
