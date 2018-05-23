import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import { HomeDiv, HomeHeader, HomeParagraph } from './generic/GenericStyledComponents';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu.Menu position='right'>
          <Link to='/dashboard'>
            <Menu.Item name='Dashboard' />
          </Link>
          <Dropdown item text='Tasks'>
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="/schedule">Scheduling</Dropdown.Item>
              <Dropdown.Item as="a" href="/expensetracker" >Expense Tracker</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Month Review</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Purchase Orders</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Productivity Tracker</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Work Orders</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Budget</Dropdown.Item>
              <Dropdown.Item as="a" disabled>Daily Actuals</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Menu.Item name='Register' />
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  leftNavs = () => {
    const { user } = this.props
    if (user.id) {
      return(
        <Menu.Menu>
          <Link to="/settings">
            <Menu.Item name={this.props.user.name} />
          </Link>
        </Menu.Menu>
      )
    } else {
      <Menu.Menu>
          <Link to='/' >
            <Menu.Item name='home' />
          </Link>
          <Link to="/settings">
            <Menu.Item name={this.props.user.name} />
          </Link>
        </Menu.Menu>
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          { this.leftNavs() }
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
