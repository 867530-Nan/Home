import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleExpense from './SingleExpense'

class ExpenseTracker extends Component {
  state = { number: 0, expenses: [], departments: [] }

  componentWillMount() {
    
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendExpense = (singleExpense) => {
    this.setState({expenses: [...this.state.expenses, singleExpense]})
  }

  displayExpenses = (departmentIndex) => {
    return(
      <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Expenses List
        </HomeSectionHeader>
        {this.props.expenses.map( (single, index) => {
          return (
            <HomeDiv
              flexDirection={'row'}
              backgroundColor={index % 2 === 0 ? `${HomeStyleGuide.color.white}` : `${HomeStyleGuide.color.gray}`}
              width={'100%'}
              padding={'0'}
              borderRadius={'5px'}
            >
              <HomeParagraph>
                {single.amount}
              </HomeParagraph>
              <HomeParagraph>
                ${single.amount}
              </HomeParagraph>
            </HomeDiv>
          )
        })}
      </HomeDiv>
    )
  }

  displayExpensesForm = () => {
    return(
      <HomeDiv
        height={'100%'}
        margin={'50px 0'}
        width={'80%'}
        borderRadius={'2px'}
      >
        {this.props.expenses.length !== 0 && this.displayExpenses()}
        <SingleExpense appendExpense={this.appendExpense} departments={this.props.departments} Back={false} />
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
      console.log(singleDepartment)
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
          <HomeHeader
            fontSize={HomeStyleGuide.font.size.medium}
          >
            Step 3: Expenses
          </HomeHeader>
          <HomeSectionHeader>
            Enter all your department's expenses for ***PULL MONTH***
          </HomeSectionHeader>
            {this.props.departments.length !== 0 && this.displayExpensesForm()}
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
