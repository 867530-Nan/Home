import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'
var moment = require('moment');


class Schedule extends React.Component {
  state = {jobs: [], employee_jobs: [], shifts: [], startDate: moment().startOf("week").format("YYYY-MM-DD")}
  
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

  renderDateHeaders = () => {
    let array = []
    for (let i = 0; i < 7; i++){
      array.push(moment(this.state.start_date).clone().add(i, 'days').format("MM/DD/YYYY"))
    }
    return(
      <Table.Row>
        { array.map( day => (<Table.HeaderCell>{day}</Table.HeaderCell>)) }
      </Table.Row>
    )
  }

  

  // renderDepartmentRows = (departments) => {
  //   return (
  //     departments.map(department => {
  //        return(
  //         <DepartmentHeaderRow props />
  //           <JobHeaderRow props={this.state.jobs.filter(job => job.department === subIndex)
  //           <Department>{department.name}
  //             { department.children.length > 0 && this.renderDepartments(department.children, level+1) }
  //         </Segment>
  //        )
  //   )
  // }

  render(){
    return(
      <Table basic='very' celled collapsing>
        <Table.Header>
          {this.renderDateHeaders()}
        </Table.Header>
        <Table.Body>
          
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