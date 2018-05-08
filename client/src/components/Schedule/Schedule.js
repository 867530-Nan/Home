import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'
 


class Schedule extends React.Component {  

  render(){
    return(
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
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