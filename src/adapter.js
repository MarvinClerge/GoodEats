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

}

export default Adapter;
