import React, {Component} from 'react'
import { connect } from 'react-redux'
import { HomeDiv, HomeSectionHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'
import EditEmployeeForm from '../Employees/EditEmployeeForm';
import { deleteEmployee } from '../../actions/employees'

class Employees extends Component {
    state = { slide: 1, editEmployee: undefined }


    deleteEmployee = (id) => {
      this.props.dispatch(deleteEmployee(id))
    }

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
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {this.props.employees.map( single => {
          return(
            <Table.Row>
              <Table.Cell>{single.first_name}</Table.Cell>
              <Table.Cell>{single.last_name}</Table.Cell>
              <Table.Cell>{single.departments}</Table.Cell>
              <Table.Cell style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} singleLine={true}>
                  <RaisedButton label="Edit" labelColor={"#0d0047"} style={{margin: '12px', color: 'white'}} onClick={() => this.setState({ slide : 2, editEmployee: single})} />
                  <br/>
                  <RaisedButton label="Delete" secondary={true} style={{margin: '12px'}} onClick={() => this.deleteEmployee(single.id)} />
                </Table.Cell>
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
    if (this.state.slide === 1 ){
      return(
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
        >
          {this.props.employees && this.displayEmployees()}
        </HomeDiv>
      )
    } else {
      return(
        <EditEmployeeForm departments={this.props.departments} employee={this.state.editEmployee} back={() => this.setState({ slide: 1 })}/>
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    employees: state.employees
  }
}

export default connect(mapStateToProps)(Employees);