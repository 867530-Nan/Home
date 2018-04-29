import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleExpense from './SingleExpense'

class EnterExpenses extends Component {
  state = { number: 0, expenses: [], departments: [] }

  componentWillMount() {
    axios.get('/api/hotels/1/departments')
      .then(res => this.setState({ departments: res.data }))
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
        {this.state.expenses.map( (single, index) => {
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
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
      >
        {this.state.expenses.length !== 0 && this.displayExpenses()}
        <SingleExpense appendExpense={this.appendExpense} />
      </HomeDiv>
    )
  }

  nextSectionButton = () => {
    return (
      <HomeDiv
        onClick={this.props.increment}
        margin={'0 10px'}
        height={'50px'}
        width={'50%'}
        backgroundColor={`${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.lightgray}
        hoverColor={HomeStyleGuide.color.black}
        cursor={'pointer'}
      >
        <HomeSectionHeader
          color={`${HomeStyleGuide.color.white}`}
        >
          Next Section
        </HomeSectionHeader>
      </HomeDiv>
    )
  }

  backButton = () => {
    return (
      <HomeDiv
        onClick={this.props.decrement}
        margin={'0 10px'}
        height={'50px'}
        width={'50%'}
        backgroundColor={`${HomeStyleGuide.color.darkred}`}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.lightgray}
        hoverColor={HomeStyleGuide.color.black}
        cursor={'pointer'}
      >
        <HomeSectionHeader
          color={`${HomeStyleGuide.color.white}`}
        >
          Previous Section
        </HomeSectionHeader>
      </HomeDiv>
    )
  }
  
  render() {
    if (this.state.departments.length === 0) {
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
            {this.state.departments.length !== 0 && this.displayExpensesForm()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
            { this.backButton () }
            { this.state.expenses !== [] ? this.nextSectionButton() : null  }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>      
      )}
    }
  }

export default EnterExpenses;
