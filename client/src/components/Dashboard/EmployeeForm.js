import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import TextField from 'material-ui/TextField';
import { Form, Dropdown } from 'semantic-ui-react'
import { addEmployee } from '../../actions/employees'

let departmentList = []
let universalJobList = []

class EmployeeForm extends React.Component {  
  state = { number: 0, firstName: "", lastName: "", emailAddress: "", phone_number: "", department: "", departmentID: undefined, departmentList: [], jobList: [], jobID: undefined }

  componentDidMount() {
    this.setDepartmentList(this.props.departments)
    this.createJobList(this.props.departments)
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendEmployee = () => {
    const single = {first_name: this.state.firstName, last_name: this.state.lastName, phone_number: this.state.phone_number, email_address: this.state.emailAddress, employeeJob: { job_id: this.state.jobID}}
    debugger
    this.props.dispatch(addEmployee(single))
    this.props.back()
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

  sendJobsToState = jobs => {
    return ( jobs.map( element => {
      const single = {text: element.name, value: element.id}
      this.setState({ jobList: [...this.state.jobList, single]})
    }))
  }

  createJobList = departments => {
    departments.map(single => {
      axios.get(`/api/departments/${single.id}/jobs`)
      .then( res => this.sendJobsToState(res.data))
      .catch( res => console.log(res))
      if (single.children) {
        this.createJobList(single.children)
      }
    })
  }

  

  setDepartmentList = (departments) => {
    for (let i = 0; i < departments.length; i += 1) {
      const department = { text: departments[i].name, value: departments[i].id }
      departmentList.push(department)
      if (departments[i].children) {
          const childDepartment = this.setDepartmentList(departments[i].children)
      }
    }
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
          <HomeDiv
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-around'}
            padding={'0'}
            margin={'2% 0'}
          >
            <Dropdown style={{width: '40%'}} placeholder='Choose Department' fluid selection options={this.state.departmentList} onChange={(e, d)=>this.setState({departmentID: d.value})} />
            <Dropdown style={{width: '40%'}} placeholder='Choose Position' fluid selection options={this.state.jobList} onChange={(e, d)=>this.setState({jobID: d.value})} />
          </HomeDiv>
          <HomeDiv
            margin={'2% 0'}
            width={'100%'}
          >
            <TextField
              hintText="Enter Employees First Name"
              floatingLabelText="First Name"
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              style={{width: '80%'}}
              autoFocus={true}
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
          </HomeDiv>
          <HomeDiv
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-around'}
          >
            <HomeDiv
              onClick={this.appendEmployee }
              height={'50px'}
              width={'25%'}
              boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
              backgroundColor={HomeStyleGuide.color.featherGreen}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.white}
              hoverColor={HomeStyleGuide.color.black}
              cursor={'pointer'}
              >
                <HomeParagraph
                  width={'100%'}
                  textAlign={'center'}
                  color={HomeStyleGuide.color.white}
                >
                  Add Employee
                </HomeParagraph>
            </HomeDiv> 
            <HomeDiv
              onClick={this.props.back}
              height={'50px'}
              width={'25%'}
              boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
              backgroundColor={HomeStyleGuide.color.featherRed}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.white}
              hoverColor={HomeStyleGuide.color.black}
              cursor={'pointer'}
              >
                <HomeParagraph
                  width={'100%'}
                  textAlign={'center'}
                  color={HomeStyleGuide.color.white}
                >
                  Back
                </HomeParagraph>
            </HomeDiv> 
          </HomeDiv>
      </HomeDiv>
    )
  }
} 




export default connect()(EmployeeForm)