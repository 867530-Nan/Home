import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeInput, media, HomeParagraph } from '../generic/GenericStyledComponents';

class SingleLaborBudgetForecast extends React.Component {
    state = { LaborBudget: "", ExpensesBudget: "", ForecastedRooms: "", departmentIndex: this.props.departmentIndex }

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
                onClick={()=>this.props.saveCPOR(this.state)}
                height={'50px'}
                width={'25%'}
                border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
                borderRadius={'20px'}
                hoverBackgroundColor={HomeStyleGuide.color.darkgray}
                hoverColor={HomeStyleGuide.color.white}
                cursor={'pointer'}
              >
              Click to Save Budget
            </HomeDiv>
          </HomeDiv>
        )
      }


    render() {
        return (
            <HomeDiv>
            <HomeDiv
                margin={'20px'}
                flexDirection={'column'}
                >
                <HomeSectionHeader>
                    {this.props.name}
                </HomeSectionHeader>
                <HomeDiv
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
                </HomeDiv>
                { this.state.ForecastedRooms !== '' && this.state.ExpensesBudget !== '' && this.state.LaborBudget !== '' ? this.displayCPOR() : null }
            </HomeDiv>
        )
    }
}

export default SingleLaborBudgetForecast