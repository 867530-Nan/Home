import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form, Dropdown, Icon, Label, Menu, Table } from 'semantic-ui-react'



class JobsForm extends Component {
  state = { name: "", payrate: "", paytype: "", currentInput: [], departmentList: [], departmentID: undefined, displayJobs: [] }

  componentDidMount() {
    this.setDepartmentList(this.props.departments)
    axios.get(`/api/departments/${this.props.subDeptID}/jobs`)
    .then(res => this.setState({ displayJobs: res.data }))
    .catch ( res => console.log(res) )
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendJob = () => {
    // payrate: this.state.payrate, WE SHOULD ADD PAY RATE???
    const single = {name: this.state.name, pay_type: this.state.paytype}
    this.props.appendJob(single, this.state.departmentID)
    this.setState({displayJobs: [...this.state.displayJobs, single]})
    this.setState({name: "", payrate: "", paytype: ""})
  }

  setDepartmentList = (departments) => {
    let departmentList = []
    for (let i = 0; i < departments.length; i += 1) {
      const department = { text: departments[i].name, value: departments[i].id }
      departmentList.push(department)
      if (departments[i].children) {
          const childDepartment = this.setDepartmentList(departments[i].children)
      }
    }
    this.setState({ departmentList: departmentList })
  }

  displayJobs = (subIndex) => {
    const result = this.state.displayJobs.filter(single => single.subDeptID === subIndex)
    const newResult = result.filter( single => single.name === this.props.singleDepartmentName)
      return(
        <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Jobs for {this.props.singleDepartmentName}
        </HomeSectionHeader>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Pay Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {this.state.displayJobs.map( (single, index) => {
          return (
              <Table.Row>
                <Table.Cell>{single.name}</Table.Cell>
                <Table.Cell>{single.pay_type}</Table.Cell>
              </Table.Row>
          )
        })}
          </Table.Body>
        </Table>
        </HomeDiv>
      )
  }
  
  render() {
    if (this.state.displayJobs.length === 0 ) {
      return (
        <HomeDiv
            flexDirection={'column'}
          >
          <HomeDiv
            flexDirection={'row'}
            width={'90%'}
          >
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
      )
    } else {
      
      return(
          <HomeDiv
          >
          <HomeDiv
            width={'90%'}
          >
            {this.displayJobs()}
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
}

export default JobsForm;
