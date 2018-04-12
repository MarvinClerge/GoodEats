const token = localStorage.getItem('token')
const getHeaders = { 'Content-Type': 'application/json', 'Accepts': 'application/json', 'Authorization': token}

class Adapter {
  static initalSearch(position) {
    let location = `&location=${position.coords.latitude},${position.coords.longitude}`
    let typeParam = `&type=restaurant`
    let radiusParam = `&radius=1000`

    return fetch(`http://localhost:3001/api/v1/places?${location + typeParam + radiusParam}`)
    .then(response => response.json())
  }

  static newSearch(position, radius, type) {
    let location = `&location=${position}`
    let typeParam = `&type=${type}`
    let radiusParam = `&radius=${radius}`

    return fetch(`http://localhost:3001/api/v1/places?${location + typeParam + radiusParam}`)
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

  static signup(payload) {
    return fetch('http://localhost:3001/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: payload.username,
          password: payload.password,
          password_confirmation: payload.passwordConfirmation
        }
      })
    })
    .then(response => response.json())
  }

  static login(payload) {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: payload.username,
          password: payload.password
        }
      })
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

  static createComment(userId, content, placeId) {
    return fetch(`http://localhost:3001/api/v1/comments`, {
      method: "POST",
      headers: getHeaders,
      body: JSON.stringify({userId, content, placeId})
    })
    .then(response => response.json())
  }

  static getComments(placeId) {
    return fetch(`http://localhost:3001/api/v1/comments?placeId=${placeId}`)
    .then(response => response.json())
  }

  static updateComment(commentId, content) {
    return fetch(`http://localhost:3001/api/v1/comments`, {
      method: "PATCH",
      headers: getHeaders,
      body: JSON.stringify({commentId, content})
    })
    .then(response => response.json())
  }

  static destroyComment(commentId) {
    return fetch(`http://localhost:3001/api/v1/comments`, {
      method: "DELETE",
      headers: getHeaders,
      body: JSON.stringify({commentId})
    })
    .then(response => response.json())
  }


}

export default Adapter;
