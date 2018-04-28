import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import TextField from 'material-ui/TextField';
import { Form } from 'semantic-ui-react'

class SingleEmployee extends React.Component {  
  state = { number: 0, firstName: "", lastName: "", emailAddress: "", phone_number: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  nextPage = () => {
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.emailAddress === "" || this.state.phone_number === ""){
      alert("Please enter valid employee information")
      this.setState({firstName: "", lastName: "", emailAddress: "", phone_number: ""})
    } else {
      const employee = {firstName: this.state.firstName, lastName: this.state.lastName, phone_number: this.state.phone_number, emailAddress: this.state.emailAddress, departmentID: this.props.departmentID}
      this.props.appendEmployee(employee)
      this.setState({firstName: "", lastName: "", emailAddress: "", phone_number: ""})
    }
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
            Add Employee Information:
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