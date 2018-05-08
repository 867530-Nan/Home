import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Intro from './Intro/Index'
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import table from './Intro/Table'
import Schedule from './Schedule/Schedule'
import HotelInformation from './Intro/HotelIntroduction'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Flash />
        <FetchUser>
            <MuiThemeProvider>
          <Switch>
            <ProtectedRoute exact path='/' component={Intro} />
            <ProtectedRoute exact path='/schedule' component={Schedule} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path="/hotels" component={HotelInformation} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/table' component={table} />
            <Route component={NoMatch} />
          </Switch>
      </MuiThemeProvider>
        </FetchUser>
      </div>
    );
  }
}

export default App;
