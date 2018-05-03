import React, {Component } from 'react'
import { connect } from 'react-redux';
import Departments from './Departments'

class DashboardContainer extends Component {
  state = {department: undefined}

  componentDidMount() {
    // this.setState({department: this.props.user.employee.jobs[0].department})
  }

  render() {
    return(
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return(
    { user: state.user }
  )
}

export default connect(mapStateToProps)(DashboardContainer);