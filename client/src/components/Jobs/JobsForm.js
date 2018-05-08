import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form, Icon, Label, Menu, Table, Checkbox } from 'semantic-ui-react'



class JobsForm extends Component {
  state = { name: "", pay_rate: undefined, pay_type: "", currentInput: [], departmentList: [], departmentID: undefined, displayJobs: [] }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.subDeptID}/jobs`)
    .then(res => this.setState({ displayJobs: res.data }))
    .catch ( res => console.log(res) )
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleRadio = (e, { value }) => this.setState({ pay_type: value })

  appendJob = () => {
    if (this.state.name === "" || this.state.pay_rate === undefined || this.state.pay_type === ""){
      alert("Please fill out all fields")
      this.setState({ name: "", pay_rate: undefined, pay_type: "" })
    } else {
      const parse = parseFloat(this.state.pay_rate)
      const single = {name: this.state.name, pay_rate: parse, pay_type: this.state.pay_type.toLowerCase()}
      this.props.appendJob(single, this.props.subDeptID)
      this.setState({displayJobs: [...this.state.displayJobs, single]})
      this.setState({name: "", payrate: "", pay_rate: ""})
    }
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
      return(
          <HomeDiv
          >
          <HomeDiv
            width={'90%'}
          >
            {this.state.displayJobs.length > 0 && this.displayJobs()}
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
              value={this.state.pay_rate}
              label='' 
              placeholder="Pay Rate" 
              id="pay_rate"
              onChange={this.handleChange}
            />
            <Form>
              <Form.Field>
                This position is paid: <b>{this.state.pay_type === "" ? "PLEASE SELECT FROM BELOW" : this.state.pay_type }</b>
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='Hourly Pay'
                  name='checkboxRadioGroup'
                  value='Hourly'
                  checked={this.state.pay_type === 'Hourly'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='Salary'
                  name='checkboxRadioGroup'
                  value='Salary'
                  checked={this.state.pay_type === 'Salary'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
            </Form>
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
