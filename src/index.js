import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import PlaceDetails from './components/PlaceDetails'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path='/' component={Home} />
//       <Route path='/place/:placeId' render={ (routerProps) => <PlaceDetails {...routerProps} /> }/>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );
registerServiceWorker();
