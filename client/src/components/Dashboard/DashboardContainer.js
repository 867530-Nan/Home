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
import { addSubDepartment, addVisibleSubDepartment } from '../../actions/departments'
import { addJob } from '../../actions/jobs'

class DashboardContainer extends Component {

  state = { slide: 1, additionalDepartments: [], jobs: [] }

  appendSubDepartment = (single) => {
      this.props.dispatch(addSubDepartment(single))
  }

  appendVisibleSubDepartment = (single) => {
    console.log("heereerhere")
    console.log(single)
    this.props.dispatch(addVisibleSubDepartment(single))
}

  appendJob = (single) => {
    this.props.dispatch(addJob(single))
    this.setState({jobs: [...this.state.jobs, single]})
}

appendEmployee = () => {
  return 
}

  incrementState = () => {
    this.setState({ slide: this.state.slide + 1 })
  }

  decrementState = () => {
    this.setState({ slide: this.state.slide - 1 })
  }

  departmentForm = () => {
    this.setState({ slide: 2 })
  }

  JobsForm = (prop) => {
    this.setState({ slide: 3, subDeptID: prop })
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
    if (slide === 1) {
      component = (
        <div>
          <Departments jobs={this.state.jobs} jobsForm={this.JobsForm} departmentForm={this.departmentForm} SubDepartmentForm={this.SubDepartmentForm} additionalDepartments={this.props.subDepartments}  department={this.props.user.employee.jobs} />
          <Employees employees={this.props.employees} employeeForm={this.EmployeeForm} />
        </div>
      )
    } else if (slide === 2) {
      component = <DepartmentForm back={this.back} appendSubDepartment={this.appendSubDepartment} departmentID={this.props.user.employee.jobs} />
    } else if (slide === 3) {
      component = <JobsForm back={this.back} appendJob={this.appendJob} jobs={this.state.jobs} departmentID={this.props.user.employee.jobs} subDeptID={this.state.subDeptID} />
    } else if (slide === 4) {
      component = <SubDepartmentForm back={this.back} appendVisibleSubDepartment={this.appendVisibleSubDepartment} departmentID={this.state.visibleID} />
    } else if (slide === 5) {
      component = <EmployeeForm back={this.back} departmentID={this.state.visibleID} departments={this.props.subDepartments} appendEmployee={this.appendEmployee} />
    } else {
      return(
        <HomeHeader>
          This ends my basic introduction to Home<br/>~ Mr. Peterson
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
      subDepartments: state.department,
      employees: state.employees
    }
  )
}

export default connect(mapStateToProps)(DashboardContainer);