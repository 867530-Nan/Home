import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Intro from './Intro/Index';
import Home from './Home'
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import table from './Intro/Table'
import Schedule from './Schedule/Schedule'
import HotelInformation from './Intro/HotelIntroduction'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from '../components/Dashboard/DashboardContainer';
import Settings from '../components/Settings/Index'
import ExpenseTracker from '../components/Expenses/ExpenseTracker'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Flash />
        <FetchUser>
          {/* MuiThemeProvider is for Material UI */}
          <MuiThemeProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <ProtectedRoute exact path='/schedule' component={Schedule} />
              <ProtectedRoute exact path='/welcome' component={Intro} />
              <ProtectedRoute exact path='/dashboard' component={Dashboard} />
              <ProtectedRoute exact path="/hotels" component={HotelInformation} />
              <ProtectedRoute exact path='/settings' component={Settings} />
              <ProtectedRoute exact path='/expensetracker' component={ExpenseTracker} />
              <Route exact path='/login' component={Login} />
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
