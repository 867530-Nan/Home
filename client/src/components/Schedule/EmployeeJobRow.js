import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'


class EmployeeJobRow extends React.Component {
  renderShiftCell = (day) => {
    let shift = this.props.shifts.filter(s => s.start_day === day)
    if (shift.length > 0)
      return(<Table.Cell>{shift[0].shift_start} -  {shift[0].shift_end}</Table.Cell>)
    else 
      return(<Table.Cell>Off</Table.Cell>)  
  }
  
  render(){
    return(
      <Table.Row>
        <Table.HeaderCell>{`${this.props.ej.first_name} ${this.props.ej.last_name}`}</Table.HeaderCell>
        {this.props.dates.map(day => {
          return(
            <React.Fragment key={`${day} ${this.props.ej.id}`}>
              {this.renderShiftCell(day)}
            </React.Fragment>
          )
        })}
      </Table.Row>
    )
  }

}

export default EmployeeJobRow