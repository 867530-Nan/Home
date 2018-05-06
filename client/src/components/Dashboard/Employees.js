import React, {Component} from 'react'
import { HomeDiv, HomeSectionHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'

class Departments extends Component {

  displayEmployees = () => {
    return ( 
      <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
        width={'100%'}
        border={`2px solid ${HomeStyleGuide.color.darkblue}`}
      >
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
          >
          <HomeSectionHeader>
            Employee Information
          </HomeSectionHeader>
          <HomeDiv
            width={'50%'}
          >
            <RaisedButton label="Add Employees" primary={true} style={{margin: '12px', width: '100%'}} onClick={this.props.employeeForm} />
          </HomeDiv>
        </HomeDiv>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {this.props.employees.map( single => {
          return(
            <Table.Row>
              <Table.Cell>{single.first_name}</Table.Cell>
              <Table.Cell>{single.last_name}</Table.Cell>
              <Table.Cell>{single.departments}</Table.Cell>
            </Table.Row>
          )
        })}
          </Table.Body>
        </Table>
      </HomeDiv>
    )
  }


  render() {
    console.log("departments rendered")
    console.log(this.props)
    return(
      <HomeDiv
        flexDirection={'row'}
        width={'100%'}
      >
        {this.displayEmployees()}
      </HomeDiv>
    )
  }
}

export default Departments;