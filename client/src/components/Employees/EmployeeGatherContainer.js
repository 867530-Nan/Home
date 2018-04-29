import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleEmployee from './SingleEmployee'

class EmployeeGatherContainer extends Component {
  state = { number: 0, departments: [], currentEmployees: [], employeeList: [], input: "", increment: 0 }

  componentWillMount() {
    axios.get('/api/hotels/1/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendEmployee = (employee) => {
    this.setState({currentEmployees: [...this.state.currentEmployees, employee]})
  }

  formatPhoneNumber = (s) => {
    var s2 = (""+s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }

  displayEmployees = (departmentIndex) => {
    return(
      <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Employee List
        </HomeSectionHeader>
        {this.state.currentEmployees.map( (single, index) => {
          return (
            <HomeDiv
              flexDirection={'row'}
              backgroundColor={index % 2 === 0 ? `${HomeStyleGuide.color.white}` : `${HomeStyleGuide.color.gray}`}
              width={'100%'}
              padding={'0'}
              borderRadius={'5px'}
            >
              <HomeParagraph>
                {single.firstName}
              </HomeParagraph>
              <HomeParagraph>
                {single.lastName}
              </HomeParagraph>
              <HomeParagraph>
                {single.emailAddress}
              </HomeParagraph>
              <HomeParagraph>
               {this.formatPhoneNumber(single.phone_number)}
              </HomeParagraph>
            </HomeDiv>
          )
        })}
      </HomeDiv>
    )
  }

  displayDepartmentForm = () => {
    if (this.state.departments.length === this.state.increment ){
      return (
        <HomeSectionHeader>
          Message about not having any more departments to complete, figure out what to do here
        </HomeSectionHeader>
      )
    } else {
      return(
        <HomeDiv
          height={'100%'}
          margin={'50px 0'}
          width={'80%'}
          borderRadius={'2px'}
          border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        >
          {this.state.currentEmployees.length !== 0 && this.displayEmployees(this.state.increment)}
          <SingleEmployee appendEmployee={this.appendEmployee} departmentID={this.state.increment} />
          <HomeDiv
              flexDirection={'row'}
              width={'80%'}
              padding={'2%'}
            >
            { this.state.employeeList.length !== 0 ? this.backASubDepartmentButton() : null}
            { this.state.currentEmployees.length !== 0 ? this.nextSubDepartment() : null  }
            </HomeDiv>
        </HomeDiv>
      )
    }
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
  
  nextSubDepartment = () => {
    const { increment } = this.state
    const employeeBlock = {increment: this.state.currentEmployees}
    return (
      <HomeDiv
        onClick={()=>this.setState({increment: this.state.increment + 1, employeeList: [...this.state.employeeList, employeeBlock ], currentEmployees: []})}
        height={'50px'}
        width={'50%'}
        margin={'0 10px'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.lightgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next Department
      </HomeDiv>
    )
  }

  backASubDepartmentButton = () => {
    return (
      <HomeDiv
        onClick={this.decrementState}
        margin={'0 10px'}
        height={'50px'}
        width={'50%'}
        border={`2px solid ${HomeStyleGuide.color.darkred}`}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.lightgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Previous Sub-Department
      </HomeDiv>
    )
  }

  decrementState = () => {
    this.setState({ increment: this.state.increment - 1 })
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

  previousSection = () => {
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
    } else if ( this.state.increment >= this.state.departments.length ) {
      return (
        <HomeDiv
          height={'100%'}
          backgroundColor={HomeStyleGuide.color.darkblue}
        >
          <HomeDiv  
            width={'100%'}
            backgroundColor={HomeStyleGuide.color.white}
            padding={'2%'}
            margin={'2%'}
            borderRadius={'2px'}
          >
            <HomeSectionHeader>
              You've entered employees for all your sub-departments.
            </HomeSectionHeader>
              {this.state.departments.length !== 0 && this.displayDepartmentForm()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
              { this.backASubDepartmentButton() }
              { this.nextSectionButton() }
              { this.previousSection() }
            </HomeDiv>
          </HomeDiv>
        </HomeDiv>      
      )
    } else {
      const singleDepartment = this.state.departments[this.state.increment]
      console.log(singleDepartment)
      return (
      <HomeDiv
        height={'100%'}
        backgroundColor={HomeStyleGuide.color.darkblue}
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
            Step 2: Employees
          </HomeHeader>
          <HomeSectionHeader>
            Enter your employee(s) for the {singleDepartment.name} Department..
          </HomeSectionHeader>
            {this.state.departments.length !== 0 && this.displayDepartmentForm()}
            <HomeDiv
              flexDirection={'row'}
              width={'100%'}
              margin={'2%'}
              >
              { this.previousSection() }
              { this.nextSectionButton() }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>      
      )}
    }
  }

export default EmployeeGatherContainer;
