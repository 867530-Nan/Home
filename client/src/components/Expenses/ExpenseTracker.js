import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form, Dropdown } from 'semantic-ui-react'
import { getExpenses } from '../../actions/expenses'

import SingleExpense from './SingleExpense'

class ExpenseTracker extends Component {
  state = { number: 0, expenses: [], departments: [] }

  componentDidMount() {
    this.props.dispatch(getExpenses())
    
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendExpense = (singleExpense) => {
    this.setState({expenses: [...this.state.expenses, singleExpense]})
  }

  dateSelect = () => {
    const Months = [
      { name: "January", value: 1 },
      { name: "February", value: 2 },
      { name: "March", value: 3 },
      { name: "April", value: 4 },
      { name: "May", value: 5 },
      { name: "June", value: 6 },
      { name: "July", value: 7 },
      { name: "August", value: 8 },
      { name: "September", value: 9 },
      { name: "October", value: 10 },
      { name: "November", value: 11 },
      { name: "December", value: 12 },
    ]
    return(
      <HomeDiv
        width={'100%'}
        height={'150px'}
        justifyContent={'space-around'}
      >
        <HomeSectionHeader>
          Step 1: Select Month
        </HomeSectionHeader>
        <Dropdown style={{width: '40%'}} placeholder='Choose Department' fluid selection options={Months} onChange={(e, d)=>this.setState({departmentID: d.value})} />
      </HomeDiv>
    )
  }

  setExpenseDropDown = () => {
    let expenseChoices = []
    
    this.props.expenses.map( single => {
      const currentChoice = {key: single.name, value: single.name, text: single.name, original: single }
      expenseChoices.push(currentChoice)
    })
    debugger
      this.setState({ expenseList: expenseChoices })

  }

  expenseSelect = () => {
    let expenseChoices = []
    
    this.props.expenses.map( single => {
      const currentChoice = {key: single.name, value: single.name, text: single.name, original: single }
      expenseChoices.push(currentChoice)
    })
    if (expenseChoices.length === []) {
      return <HomeDiv />
    } else {
    return(
      <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Step 2: Choose from past Expenses
        </HomeSectionHeader>
    { expenseChoices.length && <Dropdown placeholder='State' fluid multiple search selection options={expenseChoices} /> } 
      </HomeDiv>
      )
    }
  }

  displayExpensesForm = () => {
    return(
      <HomeDiv
        height={'100%'}
        width={'80%'}
        borderRadius={'2px'}
      >
        <SingleExpense appendExpense={this.appendExpense} departments={this.props.departments} Back={false} headerText={"Step 2: Enter Expenses"}/>
      </HomeDiv>
    )
  }

  nextSectionButton = () => {
    return (
      <HomeDiv
        onClick={() => alert("This butotn doesn't do anything yet..") }
        height={'50px'}
        width={'25%'}
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
            Next Section
          </HomeParagraph>
      </HomeDiv> 
    )
  }
  
  render() {
    if (this.props.departments.length === 0) {
      return(
        <div>
          Loading departments
        </div>
      )
    } else {
      const singleDepartment = this.state.departments[this.state.increment]
      return (
      <HomeDiv
        height={'100%'}
        backgroundColor={HomeStyleGuide.color.darkgreen}
      >
        <HomeDiv  
          width={'100%'}
          backgroundColor={HomeStyleGuide.color.white}
          padding={'2%'}
          margin={'2%'}
          borderRadius={'2px'}
          >
            { this.dateSelect() }
            { this.props.expenses.length && this.expenseSelect() }
            {this.props.departments.length && this.displayExpensesForm()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
            { this.state.expenses ? this.nextSectionButton() : null  }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>      
      )}
    }
  }

  const mapStateToProps = state => {
    return{
      departments: state.department,
      expenses: state.expenses,
    }
  }

export default connect(mapStateToProps)(ExpenseTracker)
