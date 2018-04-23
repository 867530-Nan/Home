import React, { Component } from 'react';
import axios from 'axios'
import { Dropdown } from 'semantic-ui-react'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeInput, media, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'
import SingleLaborBudgetForecast from './SingleLaborBudgetForecast'

class LaborExpenseCPOR extends Component {
  state = { LaborBudget: '', ExpensesBudget: '', ForecastedRooms: '', departments: undefined, budgets: "" }

  componentWillMount(){
    axios.get('/api/hotels/1/departments')
    .then(res => this.setState({ departments: res.data }))
  }

  saveCPOR = (info) => {
    console.log(info)
    this.setState({ budgets: [...this.state.budgets, info] })
  }

  nextScreen = () => {
    //axios call to post budgets for departments

    this.props.increment()
  }


  displayDepartmentsWithInputs = () => {
    return this.state.departments.map( (single, i) => {
      return(
        <SingleLaborBudgetForecast name={single.name} departmentIndex={i} saveCPOR={this.saveCPOR} />
      )
    })
  }


  showNextButton = () => {
    return (
      <HomeDiv
        onClick={this.nextScreen}
        height={'50px'}
        width={'25%'}
        margin={'0 10px'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next
      </HomeDiv>
    )
  }

  monthToState = (e, d) => {
    console.log("month to state")
    console.log(e)
    console.log(d)
  }

  SetMonth = () => {
    const options = [
      {
        text: "January",
        value: "January"
      },
      {
        text: "February",
        value: "February"
      },
      {
        text: "March",
        value: "March"
      },
      {
        text: "April",
        value: "April"
      },
      {
        text: "May",
        value: "May"
      },
      {
        text: "June",
        value: "June"
      },
      {
        text: "July",
        value: "July"
      },
      {
        text: "August",
        value: "August"
      },
      {
        text: "September",
        value: "September"
      },
      {
        text: "October",
        value: "October"
      },
      {
        text: "November",
        value: "November"
      },
      {
        text: "December",
        value: "December"
      }
    ]
    return <Dropdown placeholder='Select A Month:' fluid selection options={options} onChange={(e, d)=>this.setState({month: d.value})} />
  }

  render() {
    return(
      <HomeDiv
        height={'100%'}
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
            { this.SetMonth() }
            { this.state.departments && this.displayDepartmentsWithInputs() }
            { this.state.budgets !== "" ? this.showNextButton() : null }
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default LaborExpenseCPOR;
