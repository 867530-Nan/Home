import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import TextField from 'material-ui/TextField';
import { Form, Dropdown } from 'semantic-ui-react'

let departmentList = []

class SingleEmployee extends React.Component {  
  state = { number: 0, firstName: "", lastName: "", emailAddress: "", phone_number: "", department: "", departmentID: undefined, departmentList: [] }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  nextPage = () => {
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.emailAddress === "" || this.state.phone_number === ""){
      alert("Please enter valid employee information")
      this.setState({firstName: "", lastName: "", emailAddress: "", phone_number: ""})
    } else {
      const employee = {first_name: this.state.firstName, last_name: this.state.lastName, phone_number: this.state.phone_number, email_address: this.state.emailAddress}
      const ID = this.state.departmentID
      this.props.appendEmployee(employee, ID)
      this.setState({firstName: "", lastName: "", emailAddress: "", phone_number: ""})
    }
  }

  componentDidMount() {
    this.setDepartmentList(this.props.departments)
  }

  setDepartmentList = (departments) => {
    console.log("inside setin")
    for (let i = 0; i < departments.length; i += 1) {
      console.log("single dep")
      console.log(departments[i])
      const department = { text: departments[i].name, value: departments[i].id }
      departmentList.push(department)
      if (departments[i].children) {
        console.log("children children")
          const childDepartment = this.setDepartmentList(departments[i].children)
      }
    }
    console.log("here we are")
    console.log(departmentList)
    this.setState({ departmentList: departmentList })
  }

  render() {

    return(
      <HomeDiv
        height={'100%'}
        backgroundColor={HomeStyleGuide.color.white}
        padding={'2%'}
        width={'100%'}
      >
          <HomeHeader
            fontSize={HomeStyleGuide.font.size.medium}
          >
            Employee Information:
          </HomeHeader>
          <TextField
            hintText="Enter Employees First Name"
            floatingLabelText="First Name"
            id="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            style={{width: '80%'}}
          />
          <TextField
            hintText="Enter Employee's Last Name"
            floatingLabelText="Last Name"
            id="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
            style={{width: '80%'}}
          />
          <TextField
            hintText="Enter Employees Phone Number"
            floatingLabelText="Phone Number"
            id="phone_number"
            onChange={this.handleChange}
            value={this.state.phone_number}
            style={{width: '80%'}}
          />
          <TextField
            hintText="Enter Employees Email Address"
            floatingLabelText="Email Address"
            id="emailAddress"
            onChange={this.handleChange}
            value={this.state.emailAddress}
            style={{width: '80%'}}
          />
          <Dropdown placeholder='Choose Department' fluid selection options={this.state.departmentList} onChange={(e, d)=>this.setState({departmentID: d.value})} />
          <HomeDiv
            flexDirection={'row'}
            width={'80%'}
          >
            <HomeDiv
              onClick={this.nextPage}
              height={'50px'}
              width={'100%'}
              margin={'30px 20px 0 0'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px 2px 0 0'}
              hoverBackgroundColor={HomeStyleGuide.color.lightgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
            >
              Add Employee
            </HomeDiv>
          </HomeDiv>
      </HomeDiv>
    );
  }
} export default SingleEmployee