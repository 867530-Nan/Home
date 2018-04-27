import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
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
        height={'100vh'}
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
            Employee Information.
          </HomeHeader>
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.firstName}
            label='' 
            placeholder='First Name' 
            id="firstName"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.lastName}
            label='' 
            placeholder='Last Name' 
            id="lastName"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.phone_number}
            label='' 
            placeholder='Phone Number' 
            id="phone_number"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.emailAddress}
            label='' 
            placeholder='Email Address' 
            id="emailAddress"
            onChange={this.handleChange}
          />
              <HomeDiv
                flexDirection={'row'}
                width={'80%'}
              >
                <HomeDiv
                  onClick={this.nextPage}
                  height={'50px'}
                  width={'25%'}
                  margin={'0 10px'}
                  border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
                  borderRadius={'20px'}
                  hoverBackgroundColor={HomeStyleGuide.color.darkgray}
                  hoverColor={HomeStyleGuide.color.white}
                  cursor={'pointer'}
                >
                  Add Employee
                </HomeDiv>
              </HomeDiv>
        </HomeDiv>
      </HomeDiv>
    );
  }
}
 export default SingleEmployee