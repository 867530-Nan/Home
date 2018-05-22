import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Departments from '../Departments/Departments'
import DepartmentForm from '../Departments/DepartmentForm'
import JobsForm from '../Jobs/JobsForm'
import SubDepartmentForm from './SubDepartmentForm'
import EmployeeOverview from '../Employees/EmployeeOverview'
import EmployeeForm from '../Employees/EmployeeForm'
import ExpenseOverview from '../Expenses/ExpenseOverview'
import SingleExpense from '../Expenses/SingleExpense'

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
    if (this.props.subDepartments && slide === 1) {
      return (
        <div>
          <Departments 
            jobsForm={this.JobsForm} 
            department={this.props.subDepartments} 
          />
          <hr />
          <EmployeeOverview 
            employeeForm={this.EmployeeForm}
            departments={this.props.subDepartments} 
          />
          <hr/>
          <ExpenseOverview
            singleExpense={() => this.setState({ slide: 6 })}
            departments={this.props.subDepartments}
          />
        </div>
      )
    } else if (slide === 2) {
      return( <DepartmentForm 
                back={this.back} 
                appendSubDepartment={this.appendSubDepartment} 
                departmentID={this.state.visibleID} 
                parentID={this.state.parentID}
              />)
    } else if (slide === 3) {
      return ( <JobsForm 
                updateJob={this.updateJob} 
                destroyJob={this.destroyJob} 
                back={this.back} 
                appendJob={this.appendJob} 
                singleDepartmentName={this.state.singleDepartmentName} 
                subDeptID={this.state.subDeptID} 
              />)
    } else if (slide === 4) {
      return(
              <SubDepartmentForm 
                back={this.back} 
                appendVisibleSubDepartment={this.appendVisibleSubDepartment} 
                departmentID={this.state.visibleID} 
              />
      )
    } else if (slide === 5) {
      return ( <EmployeeForm 
                back={this.back} 
                departments={this.props.subDepartments} 
                appendEmployee={this.appendEmployee}
                jobs={this.props}
              />)
    } else if (slide === 6) {
      return ( <SingleExpense 
                departments={this.props.subDepartments} 
                back={() => this.setState({ slide: 1 })}
                dispatch={this.props.dispatch}
              />)
    } else {
      return(
        <HomeHeader>
          Hello
        </HomeHeader>
      )
    }
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