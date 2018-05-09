import React, { Component, Fragment } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'
import DepartmentHeaderRow from './DepartmentHeaderRow'
import JobHeaderRow from './JobHeaderRow'
import EmployeeJobRow from './EmployeeJobRow'
import { ISO_8601 } from 'moment';
var moment = require('moment');


class Schedule extends React.Component {
  state = {jobs: [], employee_jobs: [], shifts: [], startDate: moment().startOf("week").format(), datesArray: []}
  
  componentDidMount(){
    axios.get('api/employee_jobs')
    .then( res => {
      this.setState({employee_jobs: res.data})
    })
    .catch( res => {

    })

    axios.get('api/all_managed_jobs')
    .then( res => {
      this.setState({jobs: res.data})
    })
    .catch( res => {

    })

    this.setDatesArray()
    this.getShifts()
  }  

  getShifts = () => {
    axios.get(`api/week_shifts/${this.state.startDate}`)
    .then( res => {
      this.setState({shifts: res.data})
    })
    .catch( res => {

    })
  }

  setDatesArray = () => {
    let array = []
    for (let i = 0; i < 7; i++)
      array.push(moment(this.state.startDate).add(i, 'days').format("MM/DD/YYYY"))
    this.setState({datesArray: array})
  }

  renderDateHeaders = () => {
    return(
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        { this.state.datesArray.map( day => (<Table.HeaderCell>{day}</Table.HeaderCell>)) }
      </Table.Row>
    )
  }

  

  renderDepartmentRows = (departments) => {
    return (
      departments.map(department => {
         return(
          <React.Fragment>
            <DepartmentHeaderRow department={department} />
            {this.state.jobs.filter(job => job.department_id === department.id ).map(job => {
              return(
                <React.Fragment>
                  <JobHeaderRow job={job} />
                    {this.state.employee_jobs.filter(ej => ej.job_id === job.id).map(ej => {
                      return(
                        <EmployeeJobRow ej={ej} dates={this.state.datesArray} shifts={this.state.shifts.filter(s => s.employee_job_id === ej.id)} />
                      )
                    })}
                </React.Fragment> 
              )
            })
          }
          { department.children.length > 0 && this.renderDepartmentRows(department.children) }
          </React.Fragment>
         )
      })
    )
  }

  

  render(){
    return(
      <Table basic='very' celled collapsing>
        <Table.Header>
          {this.renderDateHeaders()}
        </Table.Header>
        <Table.Body>
          {this.renderDepartmentRows(this.props.departments)}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return(
    { user: state.user,
      departments: state.department,
      employees: state.employees
    }
  )
}
export default connect(mapStateToProps)(Schedule)