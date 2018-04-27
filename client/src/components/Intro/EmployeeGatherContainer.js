import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleEmployee from './SingleEmployee'

class EmployeeGatherContainer extends Component {
  state = { number: 0, departments: [], employees: [], input: "", increment: 0 }

  componentWillMount() {
    axios.get('/api/hotels/1/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendEmployee = (employee) => {
    this.setState({employees: [...this.state.employees, employee]})
  }

  displayEmployees = (departmentIndex) => {
    const result = this.state.employees.filter(single => single.departmentID === departmentIndex)
    return result.map( (single, index) => {
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
    })
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
            {this.displayEmployees(single.id)}
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
    if (this.state.departments.length === 0) {
      return(
        <div>
          Loading departments
        </div>
      )
    } else {
      return (
      <HomeDiv
        height={'100%'}
        backgroundColor={HomeStyleGuide.color.darkred}
      >
        <HomeDiv  
          width={'100%'}
          backgroundColor={HomeStyleGuide.color.lightgray}
          borderRadius={'10px'}
          padding={'2%'}
          >
          <HomeHeader
            fontSize={HomeStyleGuide.font.size.medium}
          >
            Next, <br/>Add Employee Information...
          </HomeHeader>
            {this.state.departments.length !== 0 && this.displayDepartments()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
            { this.state.employees !== [] ? this.displayIncrement() : null  }
            { this.backButton () }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>      
      )}
    }
  }

export default EmployeeGatherContainer;
