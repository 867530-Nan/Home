import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeInput, media, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class Third extends Component {
  state = { LaborBudget: '', ExpensesBudget: '', ForecastedRooms: '' }

  handleChange = (e) => {
    const { id , value } = e.target;
    if (isNaN(value)){
      this.setState({[id]: ''})
      alert("Please enter a valid number..")
    } else {
      this.setState({ [id]: value });
    }
  }

  displayCPOR = () => {
    const total1 = this.state.LaborBudget / this.state.ForecastedRooms
    const total2 = this.state.ExpensesBudget / this.state.ForecastedRooms
    const total3 = total1 + total2 
    return(
      <HomeDiv
        margin={'20px'}
        width={'100%'}
      >
        <HomeDiv
          flexDirection={'row'}
          margin={'0 0 30px 0'}
        >
          <HomeParagraph 
            textAlign={'center'}
          >
            Labor CPOR: {total1.toFixed(2)}
          </HomeParagraph>
          <HomeParagraph 
            textAlign={'center'}
          >
            Expenses CPOR: {total2.toFixed(2)}
          </HomeParagraph>
          <HomeParagraph 
            textAlign={'center'}
          >
            Combined CPOR: {total3.toFixed(2)}
          </HomeParagraph>
        </HomeDiv>
        <HomeDiv
            onClick={this.props.increment}
            height={'50px'}
            width={'25%'}
            border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
            borderRadius={'20px'}
            hoverBackgroundColor={HomeStyleGuide.color.darkgray}
            hoverColor={HomeStyleGuide.color.white}
            cursor={'pointer'}
          >
          Next
        </HomeDiv>
      </HomeDiv>
    )
  }

  render() {
    return(
      <HomeDiv
        height={'100vh'}
        backgroundColor={HomeStyleGuide.color.darkred}
      >
        <HomeDiv
          padding={'5% 2%'}
          width={'80%'}
          margin={'30px'}
          borderRadius={'20px'}
          backgroundColor={HomeStyleGuide.color.white}
        >
          <HomeSectionHeader
            padding={'2%'}
            margin={'30px 0 10px 0'}
            fontWeight={'300'}
            fontSize={HomeStyleGuide.font.size.mediumSmall}
          >
            The budget is broken down into two catagories..<br/>LABOR and EXPENSES<br/>Each of these two budgets will be broken down further as we move through this initial setup. Begin by entering the total LABOR BUDGET, EXPENSES BUDGET, and FORCASTED ROOMS. Once this fields are entered, the "Cost Per Occupied Rooms" field will auto populate.
          </HomeSectionHeader>
            <HomeDiv
              margin={'20px'}
              flexDirection={'row'}
            >
              <HomeDiv>
              <label>Labor Budget<br/></label>
              <HomeInput 
                fluid 
                value={this.state.LaborBudget}
                label='Labor Budget' 
                placeholder='Labor Budget' 
                id="LaborBudget"
                onChange={this.handleChange}
              />
              </HomeDiv>
              <HomeDiv>
              <label>Expenses Budget<br/></label>
              <HomeInput 
                fluid 
                value={this.state.ExpensesBudget}
                label='Expenses Budget' 
                placeholder='Expenses Budget' 
              id="ExpensesBudget"
              onChange={this.handleChange}
              />
              </HomeDiv>
              <HomeDiv>
              <label>Forecasted Rooms<br/></label>
              <HomeInput 
                fluid 
                value={this.state.ForecastedRooms}
                label='Forecasted Rooms' 
                placeholder='Forecasted Rooms' 
                id="ForecastedRooms"
                onChange={this.handleChange}
                />
                </HomeDiv>
            </HomeDiv>
          { this.state.ForecastedRooms !== '' && this.state.ExpensesBudget !== '' && this.state.LaborBudget !== '' ? this.displayCPOR() : null }
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default Third;
