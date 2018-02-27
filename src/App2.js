import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home2';
import PlaceDetails from './components/PlaceDetails2'
import Adapter from './adapter'
import './css/App.css'

import NavBar from './components/NavBar'
import Search from './components/Search2'
import PlacesContainer from './components/PlacesContainer2'

class App extends Component {
  state = {
    places: null,
    position: null,
    favorites: [],
    currentUser: null,
    auth: {
      loggedIn: false,
      token: null
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      Adapter.getCurrentUser()
      .then(data => this.setState({
        auth: {loggedIn: true, token: token},
        currentUser: data.user,
        favorites: data.favorites
      }))
    }
  }

  // Home
  initialize = (newPlaces, newPosition) => {
    this.setState({ places: newPlaces, position: newPosition })
  }

  // NavBar
  handleLogin = (username, password) => {
    Adapter.login(username, password)
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('token', data.token)
        this.setState({
          auth: {...this.state.auth, loggedIn: true, token: data.token}
        })
      }
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        loggedIn: false,
        token: undefined
      }
    })
  }

  handleSearch = (radius, type) => {
    Adapter.newSearch(this.state.position, radius, type)
    .then( newPlaces => this.setState({ places: newPlaces }))
  }

  // Search
  addToFavorites = (placeId) => {
    let userId = this.state.currentUser.id
    let favorites = this.state.favorites

    Adapter.addToFavorites(userId, placeId)
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.setState({
           favorites: [...this.state.favorites, placeId]
        })
      }
    }) // .then
  }

  removeFromFavorites = (placeId) => {
    let userId = this.state.currentUser.id
    let placeIndex = this.state.favorites.indexOf(placeId)

    Adapter.removeFromFavorites(userId, placeId)
    .then(data => {
      if (data.message) {
        let newFavorites = this.state.favorites
        newFavorites.splice(placeIndex, 1)

        this.setState({
          favorites: newFavorites
        })
      } else if (data.error) {
        console.log(data.error)
      }
    }) // .then
  }

  render(){
    return(
      <div className='app'>
        <NavBar
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
          auth={this.state.auth} />
        <Switch>
          <Route exact path='/' render={() => {
              return (
                <Home
                  places={this.state.places}
                  favorites={this.state.favorites}
                  auth={this.state.auth}
                  handleSearch={this.handleSearch}
                  initialize={this.initialize}
                  addToFavorites={this.addToFavorites}
                  removeFromFavorites={this.removeFromFavorites} />
              )
            }}/>

          <Route path='/place/:placeId' render={(routerProps) => {
              return(
                <PlaceDetails
                  {...routerProps}
                  auth={this.state.auth}
                  favorites={this.state.favorites}
                  addToFavorites={this.addToFavorites}
                  removeFromFavorites={this.removeFromFavorites}
                  currentUser={this.state.currentUser} />
              )
            }}/>


          </Switch>
        </div>
    )
  }


  // render() {
  //   return(
  //     <Router>
  //       <Switch>
  //         <Route exact path='/' render={() => {
  //             return (
  //               <Home
  //                 places={this.state.places}
  //                 favorites={this.state.favorites}
  //                 handleLogout={this.handleLogout}
  //                 handleLogin={this.handleLogin}
  //                 auth={this.state.auth}
  //                 handleSearch={this.handleSearch}
  //                 initialize={this.initialize}
  //                 addToFavorites={this.addToFavorites}
  //                 removeFromFavorites={this.removeFromFavorites} />
  //
  //
  //             )
  //
  //
  //           }}/>
  //       </Switch>
  //     </Router>
  //   )
  // }


}

export default App;
