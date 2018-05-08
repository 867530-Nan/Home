import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'
 


class Schedule extends React.Component {
  state = {jobs: [], employee_jobs: [], shifts: []}
  
  componentDidMount(){
    axios.get('api/shifts')
    .then( res => {
      this.setState({shifts: res.data})
    })
    .catch( res => {

    })

    axios.get('api/employee_jobs')
    .then( res => {
      this.setState({employee_jobs: res.data})
    })
    .catch( res => {

    })

    axios.get('/api/all_managed_jobs')    
    .then( res => {
      this.setState({jobs: res.data})
    })
    .catch( res => {
      console.log(res)
      debugger

    })
  }  

  // renderDepartmentRows = (departments) => {
  //   return (
  //     departments.map(department => {
  //        return(
  //         <DepartmentHeaderRow props />
          
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
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>1/1/2018</Table.HeaderCell>
            <Table.HeaderCell>1/2/2018</Table.HeaderCell>
          </Table.Row>
          {/* {this.renderDepartmentRows(this.props.departments)} */}
        </Table.Header>
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