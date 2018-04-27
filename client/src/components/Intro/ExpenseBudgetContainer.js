import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleEmployee from './SingleEmployee'

class ExpenseBudgetContainer extends Component {
  state = { number: 0, departments: [], employees: [], input: "", increment: 0 }

  componentWillMount() {
    // pull department from redux
    // axios.get('/api/hotels/1/departments')
    //   .then(res => this.setState({ departments: res.data }))
  }

  displayDepartments = () => {
    return this.state.departments.map( (single, i) => {
      return(
        <HomeDiv
          height={'100%'}
          margin={'50px 0'}
          width={'100%'}
        >
            <HomeHeader
              fontSize={HomeStyleGuide.font.size.medium}
            >
              {single.name}
            </HomeHeader>
            {this.displayBudgets(single.id)}
            <SingleEmployee appendEmployee={this.appendEmployee} departmentID={single.id} departmentName={single.name}/>
          </HomeDiv>
        )
      })
  }

  departmentIncrement = () => {
    axios.post('/api/hotels/1/departments/create_multiple', this.state.departments)
        .then( res => {
          this.setState({ increment: this.state.increment + 1})
          }).catch( err => {
            console.log("error")
            console.log(err)
        });
  }
  
  displayDepartmentIncrement = () => {
    return (
      <HomeDiv
        onClick={this.departmentIncrement}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        margin={'0 10px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next
      </HomeDiv>
    )
  }

  subdepartmentIncrement = () => {
    // const departments = this.state.departments
    // axios.post('/api/hotels/0/departments', departments)
    //     .then( res => {
    //       this.setState({ increment: this.state.increment + 1})
    //       }).catch( err => {
    //         console.log("error")
    //         console.log(err)
    //     });
    this.props.increment()
  }
  
  displayIncrement = () => {
    return (
      <HomeDiv
        onClick={this.props.increment}
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

  decrement = () => {
    this.setState({ increment: this.state.increment - 1 })
  }

  backButton = () => {
    return (
      <HomeDiv
        onClick={this.decrement}
        margin={'0 10px'}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Back
      </HomeDiv>
    )
  }
  
  render() {
      return(
        <div>
          This Expense page will pull department head from redux, and render form for budget expenses (name, budget) input
        </div>
      )
    // else {
    //   return (
    //   <HomeDiv
    //     height={'100%'}
    //     backgroundColor={HomeStyleGuide.color.darkred}
    //   >
    //     <HomeDiv  
    //       width={'100%'}
    //       backgroundColor={HomeStyleGuide.color.lightgray}
    //       borderRadius={'10px'}
    //       padding={'2%'}
    //       >
    //       <HomeHeader
    //         fontSize={HomeStyleGuide.font.size.medium}
    //       >
    //         Next, <br/>Let's add Employee Information information..
    //       </HomeHeader>
    //         {this.state.departments.length !== 0 && this.displayDepartments()}
    //         <HomeDiv
    //           flexDirection={'row'}
    //           width={'80%'}
    //         >
    //         { this.state.employees !== [] ? this.displayIncrement() : null  }
    //         { this.backButton () }
    //         </HomeDiv>
    //     </HomeDiv>
    //   </HomeDiv>      
    //   )}
    }
  }

export default ExpenseBudgetContainer;
