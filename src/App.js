import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PlaceDetails from './components/PlaceDetails'
import Adapter from './adapter'

class App extends Component {
  state = {
    places: null,
    position: null,
    currentPlace: null,
    radius: null,
    type: null
  }

  // getAllLocations = () => {
  //   if ( navigator.geolocation ) {
  //     navigator.geolocation.getCurrentPosition(( position ) => {
  //       let newPosition = `${position.coords.latitude},${position.coords.longitude}`
  //       Adapter.initalSearch( position )
  //       .then( newPlaces => this.setState({ places: newPlaces, position: newPosition }) )
  //     })
  //   } else {
  //     return null
  //   }
  // }

  initializePlaces = (newPlaces, newPosition) => {
    this.setState({ places: newPlaces, position: newPosition })
  }

  handleSubmit = () => {
    Adapter.newSearch(this.state.position)
    .then( newPlaces => this.setState({ places: newPlaces }))
  }


  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
            return <Home
              handleSubmit={this.handleSubmit}
              places={this.state.places}
              initializePlaces={this.initializePlaces} />
          }} />

          <Route path='/place/:placeId' render={(routerProps) => {
            return <PlaceDetails {...routerProps} />
          }} />
        </Switch>
      </Router>
    )
  }




  // render() {
  //   return (
  //     <div className="App">
  //       <Switch>
  //         <Route exact path='/'
  //           component={Home} />
  //
  //         <Route path='/place/:placeId'
  //           render={(routerProps) => <PlaceDetails {...routerProps}/> }/>
  //       </Switch>
  //     </div>
  //   );
  // }
}

export default App;
