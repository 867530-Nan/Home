import React, {Component} from 'react'
import { connect } from 'react-redux'
import { HomeDiv, HomeSectionHeader, HomeHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import SingleExpense from './SingleExpense'
import HomeStyleGuide from '../generic/HomeStyleGuide';
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'
import EditEmployeeForm from '../Employees/EditEmployeeForm';
import { deleteEmployee } from '../../actions/employees';
import { getExpenses } from '../../actions/expenses'


class EmployeeOverview extends Component {
  state = { slide: 1, editEmployee: undefined, showSingle: true }

  componentDidMount() {
    this.props.dispatch(getExpenses())
  }

  deleteEmployee = (id) => {
    this.props.dispatch(deleteEmployee(id))
  }

  singleExpense = () => {
      return(
        <Table.Row>
          <Table.Cell style={{textAlign: 'center'}}>{this.props.expenses[0].id}</Table.Cell>
          <Table.Cell style={{textAlign: 'center'}}>{this.props.expenses[0].name}</Table.Cell>
          <Table.Cell style={{textAlign: 'center'}}>{this.props.expenses[0].department}</Table.Cell>
          <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
              <RaisedButton label="Edit" backgroundColor={HomeStyleGuide.color.lightIndigo} style={{margin: '12px', color: 'white'}} onClick={() => this.setState({ slide : 2, editEmployee: this.props.expenses[0] })} />
              <br/>
              <RaisedButton label="Delete" backgroundColor={HomeStyleGuide.color.white} style={{margin: '12px'}} onClick={() => this.deleteEmployee(this.props.expenses[0].id)} />
            </Table.Cell>
        </Table.Row>
      )
  }

  allExpenses = () => {
    return this.props.expenses.map( (single, index) => {
      return(
        <Table.Row>
          <Table.Cell style={{textAlign: 'center'}}>{single.id}</Table.Cell>
          <Table.Cell style={{textAlign: 'center'}}>{single.name}</Table.Cell>
          <Table.Cell style={{textAlign: 'center'}}>{single.department}</Table.Cell>
          <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
              <RaisedButton label="Edit" backgroundColor={HomeStyleGuide.color.featherGreen} style={{margin: '12px', color: 'white'}} onClick={() => this.setState({ slide : 2, editEmployee: single })} />
              <br/>
              <RaisedButton label="Delete" backgroundColor={HomeStyleGuide.color.white} style={{margin: '12px'}} onClick={() => this.deleteEmployee(single.id)} />
            </Table.Cell>
        </Table.Row>
      )
    })
  }

  displayExpenses = () => {
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
            Expenses
          </HomeSectionHeader>
          <HomeDiv
            width={'50%'}
          >
            <RaisedButton label="Add Expense" backgroundColor={HomeStyleGuide.color.featherLime} style={{margin: '12px', width: '60%'}} onClick={() => this.props.singleExpense(this.props.department)} />
          </HomeDiv>
        </HomeDiv>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable singleLine>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell style={{textAlign: 'center'}} >ID</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Name</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Department</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}} >Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        { this.state.showSingle ? this.singleExpense() : this.allExpenses() }
          </Table.Body>
        </Table>
      </HomeDiv>
    )
  }


  render() {
    if (this.props.expenses && this.state.slide === 1 ){
      return(
        <HomeDiv
          flexDirection={'column'}
          width={'100%'}
          margin={'3% 0'}
        >
          { this.props.expenses.length > 0 && this.displayExpenses()}
          <HomeDiv
              onClick={() => this.setState({ showSingle: !this.state.showSingle })}
              height={'50px'}
              width={'50%'}
              boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
              backgroundColor={HomeStyleGuide.color.featherTeal}
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
                  {this.state.showSingle ? "Show All Expenses" : "Hide Expenses"}
                </HomeParagraph>
            </HomeDiv>
        </HomeDiv>
      )
    } else {
      return(
        <HomeHeader />
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(EmployeeOverview);