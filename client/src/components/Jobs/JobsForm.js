import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form, Dropdown } from 'semantic-ui-react'

let departmentList = []

class JobsForm extends Component {
  state = { name: "", payrate: "", paytype: "", currentInput: [], departmentList: [] }

  componentDidMount() {
    this.setDepartmentList(this.props.departments)
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendJob = () => {
    const single = {name: this.state.name, payrate: this.state.payrate, paytype: this.state.paytype, subDeptID: this.props.subDeptID}
    this.props.appendJob(single)
    this.setState({currentInput: [...this.state.currentInput, single]})
    this.setState({name: "", payrate: "", paytype: ""})
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

  displayJobs = (subIndex) => {
    const result = this.props.jobs.filter(single => single.subDeptID === subIndex)
    return ( result.map( (single, index) => {
      return(
        <HomeDiv
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
            width={'80%'}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'75%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.payrate}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.paytype}
              </HomeSectionHeader>
            </HomeDiv>
          </HomeDiv>
      )
    }))
  }

  displayInput = () => {
    return(
      <HomeDiv
        flexDirection={'row'}
        width={'100%'}
      >
        {this.displayJobs()}
        {this.state.currentInput.map( single => {
          return(
            <div>
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.payrate}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.paytype}
              </HomeSectionHeader>
            </div>
          )
        })}
        </HomeDiv>
    )
  }
  
  render() {
    return(
        <HomeDiv
          flexDirection={'column'}
        >
        <HomeDiv
          flexDirection={'row'}
          width={'90%'}
        >
          {this.displayInput()}
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.name}
            label='' 
            placeholder='Job Name' 
            id="name"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.payrate}
            label='' 
            placeholder="Pay Rate" 
            id="payrate"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.paytype}
            label='' 
            placeholder="Pay Type" 
            id="paytype"
            onChange={this.handleChange}
          />
          <Dropdown placeholder='Choose Department' fluid selection options={this.state.departmentList} onChange={(e, d)=>this.setState({departmentID: d.value})} />
        </HomeDiv>
        <HomeDiv
          onClick={this.appendJob}
          height={'50px'}
          width={'25%'}
          border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
          borderRadius={'2px'}
          hoverBackgroundColor={HomeStyleGuide.color.darkgray}
          hoverColor={HomeStyleGuide.color.white}
          cursor={'pointer'}
          >
          Add Job
        </HomeDiv>  
        <HomeDiv
          onClick={this.props.back}
          height={'50px'}
          width={'25%'}
          border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
          borderRadius={'2px'}
          hoverBackgroundColor={HomeStyleGuide.color.darkgray}
          hoverColor={HomeStyleGuide.color.white}
          cursor={'pointer'}
          >
          Finished
        </HomeDiv>  
      </HomeDiv>
    );
  }
}

export default JobsForm;
