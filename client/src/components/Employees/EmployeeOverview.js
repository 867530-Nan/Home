import React, {Component} from 'react'
import { connect } from 'react-redux'
import { HomeDiv, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'
import EditEmployeeForm from '../Employees/EditEmployeeForm';
import { deleteEmployee } from '../../actions/employees'

class EmployeeOverview extends Component {
    state = { slide: 1, editEmployee: undefined, showSingle: true }


    deleteEmployee = (id) => {
      this.props.dispatch(deleteEmployee(id))
    }

    showAllEmployees = () => {
      return ( this.props.employees.map( single => {
        return(
          <Table.Row>
            <Table.Cell style={{textAlign: 'center'}}>{single.first_name}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{single.last_name}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{single.departments}</Table.Cell>
            <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
                <RaisedButton label="Edit" backgroundColor={HomeStyleGuide.color.skyBlue} style={{margin: '12px', color: 'white'}} onClick={() => this.setState({ slide : 2, editEmployee: single})} />
                <br/>
                <RaisedButton label="Delete" backgroundColor={HomeStyleGuide.color.white} style={{margin: '12px'}} onClick={() => this.deleteEmployee(single.id)} />
              </Table.Cell>
          </Table.Row>
        )
      }))
    }

    showSingleEmployee = () => {
      return(
        <Table.Row>
            <Table.Cell style={{textAlign: 'center'}}>{this.props.employees[0].first_name}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{this.props.employees[0].last_name}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{this.props.employees[0].departments}</Table.Cell>
            <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
                <RaisedButton label="Edit" backgroundColor={HomeStyleGuide.color.skyBlue} style={{margin: '12px', color: 'white'}} onClick={() => this.setState({ slide : 2, editEmployee: this.props.employees[0]})} />
                <br/>
                <RaisedButton label="Delete" backgroundColor={HomeStyleGuide.color.white} style={{margin: '12px'}} onClick={() => this.deleteEmployee(this.props.employees[0].id)} />
              </Table.Cell>
          </Table.Row>
      )
    }

  displayEmployees = () => {
    return ( 
      <HomeDiv
        width={'100%'}
        margin={'10px 0'}
        padding={'0'}
        width={'100%'}
      >
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
          >
          <HomeSectionHeader
            width={'50%'}
          >
            Employees
          </HomeSectionHeader>
          <HomeDiv
            width={'50%'}
          >
            <RaisedButton label="Add Employees" backgroundColor="#B2DFDB" style={{margin: '12px', width: '60%'}} onClick={this.props.employeeForm} />
          </HomeDiv>
        </HomeDiv>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{textAlign: 'center'}} >First Name</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Last Name</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Department</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Employee Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        { this.state.showSingle && this.props.employees ? this.showSingleEmployee() : this.showAllEmployees() }
          </Table.Body>
        </Table>
      </HomeDiv>
    )
  }

  showEmployeesButton = () => {
    return(
      <HomeDiv
        onClick={() => this.setState({ showSingle: !this.state.showSingle })}
        height={'50px'}
        width={'50%'}
        boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
        backgroundColor={HomeStyleGuide.color.featherIndigo}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.white}
        hoverColor={HomeStyleGuide.color.black}
        cursor={'pointer'}
        >
          <HomeParagraph
            width={'100%'}
            textAlign={'center'}
            color={HomeStyleGuide.color.white}
          >
            {this.state.showSingle ? "Show All Employees" : "Hide Employees"}
          </HomeParagraph>
      </HomeDiv>  
    )
  }


  render() {
    console.log("departments rendered")
    console.log(this.props)
    if (this.state.slide === 1 ){
      return(
        <HomeDiv
          flexDirection={'column'}
          width={'100%'}
          margin={'3% 0'}
        >
          {this.props.employees.length > 0 && this.displayEmployees()}
          { this.props.employees.length > 1 && this.showEmployeesButton() }
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

export default connect(mapStateToProps)(EmployeeOverview);