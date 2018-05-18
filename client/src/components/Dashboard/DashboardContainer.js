import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Departments from './Departments'
import DepartmentForm from './DepartmentForm'
import JobsForm from '../Jobs/JobsForm'
import SubDepartmentForm from './SubDepartmentForm'
import Employees from './Employees'
import EmployeeForm from './EmployeeForm'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HHeader, HSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import {getHotel} from '../../actions/Hotel'
import { addDepartment, addVisibleSubDepartment } from '../../actions/departments'
import { addEmployee } from '../../actions/employees'

class DashboardContainer extends Component {

  state = { slide: 1, additionalDepartments: [], jobs: [] }

  appendSubDepartment = (single) => {
      this.props.dispatch(addDepartment(single))
  }

  appendVisibleSubDepartment = (single) => {
    this.props.dispatch(addVisibleSubDepartment(single))
  }

  incrementState = () => {
    this.setState({ slide: this.state.slide + 1 })
  }

  decrementState = () => {
    this.setState({ slide: this.state.slide - 1 })
  }

  departmentForm = (id) => {
    this.setState({ slide: 2, visibleID: id })
  }

  JobsForm = (prop, name) => {
    this.setState({ slide: 3, subDeptID: prop, singleDepartmentName: name })
  }

  SubDepartmentForm = (prop) => {
    this.setState({ slide: 4, visibleID: prop })
  }

  EmployeeForm = (prop) => {
    this.setState({ slide: 5, visibleID: prop })
  }

  back = () => {
    this.setState({ slide: 1 })
  }

  render() {
    const { slide } = this.state;
    let component = null
    if (this.props.user.employee && slide === 1) {
      component = (
        <div>
          <Departments 
            jobs={this.state.jobs} 
            jobsForm={this.JobsForm} 
            departmentForm={this.departmentForm} 
            SubDepartmentForm={this.SubDepartmentForm} 
            additionalDepartments={this.props.subDepartments}  
            department={this.props.subDepartments} 
            user={this.props.user} 
          />
          <hr />
          <Employees 
            employeeForm={this.EmployeeForm}
            departments={this.props.subDepartments} 
          />
        </div>
      )
    } else if (slide === 2) {
      component = <DepartmentForm 
                    back={this.back} 
                    appendSubDepartment={this.appendSubDepartment} 
                    departmentID={this.state.visibleID} 
                    parentID={this.state.parentID}
                  />
    } else if (slide === 3) {
      component = <JobsForm 
                    updateJob={this.updateJob} 
                    destroyJob={this.destroyJob} 
                    back={this.back} 
                    appendJob={this.appendJob} 
                    singleDepartmentName={this.state.singleDepartmentName} 
                    subDeptID={this.state.subDeptID} 
                  />
    } else if (slide === 4) {
      component = <SubDepartmentForm 
                    back={this.back} 
                    appendVisibleSubDepartment={this.appendVisibleSubDepartment} 
                    departmentID={this.state.visibleID} 
                  />
    } else if (slide === 5) {
      component = <EmployeeForm 
                    back={this.back} 
                    departments={this.props.subDepartments} 
                    appendEmployee={this.appendEmployee}
                    jobs={this.props}
                  />
    } else {
      return(
        <HomeHeader>
          
        </HomeHeader>
      )
    }

    return(
      component
    );
  }
}

const mapStateToProps = (state) => {
  return(
    { user: state.user,
      subDepartments: state.department
    }
  )
}

export default connect(mapStateToProps)(DashboardContainer);