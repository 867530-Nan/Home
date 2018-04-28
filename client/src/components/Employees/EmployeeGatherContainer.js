import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
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

  displayEmployees = (departmentIndex) => {
    return(
      <HomeDiv
        width={'80%'}
        margin={'2%'}
      >
        <HomeSectionHeader>
          Employee List
        </HomeSectionHeader>
        {this.state.currentEmployees.map( (single, index) => {
          return (
            <HomeDiv
              flexDirection={'row'}
              backgroundColor={index % 2 === 0 ? `${HomeStyleGuide.color.white}` : `${HomeStyleGuide.color.gray}`}
              width={'80%'}
              borderRadius={'5px'}
            >
              <HomeSectionHeader>
                {single.firstName}
              </HomeSectionHeader>
              <HomeSectionHeader>
              {single.lastName}
              </HomeSectionHeader>
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
  
  displayIncrement = () => {
    const { increment } = this.state
    const employeeBlock = {increment: this.state.currentEmployees}
    return (
      <HomeDiv
        onClick={()=>this.setState({increment: this.state.increment + 1, employeeList: [...this.state.employeeList, employeeBlock ], currentEmployees: []})}
        height={'50px'}
        width={'25%'}
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

  decrement = () => {
    this.setState({ increment: this.state.increment - 1 })
  }

  backButton = () => {
    return (
      <HomeDiv
        onClick={this.props.decrement}
        margin={'0 10px'}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.lightgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Back
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
        backgroundColor={HomeStyleGuide.color.darkblue}
        borderRadius={'2px'}
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
            Next,
          </HomeHeader>
          <HomeSectionHeader>
            Enter your employee(s) for the {singleDepartment.name} Department..
          </HomeSectionHeader>
            {this.state.departments.length !== 0 && this.displayDepartmentForm()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
            { this.backButton () }
            { this.state.currentEmployees !== [] ? this.displayIncrement() : null  }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>      
      )}
    }
  }

export default EmployeeGatherContainer;
