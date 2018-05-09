import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form, Icon, Label, Menu, Table, Checkbox } from 'semantic-ui-react'



class JobsForm extends Component {
  state = { name: "", pay_rate: undefined, pay_type: "", currentInput: [], departmentList: [], departmentID: undefined, displayJobs: [], slide: 1 }

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

  destroyJob = (deptID, jobID) => {
    console.log("hey")
    const newJobs = this.state.displayJobs.filter(single => single.id !== jobID)
    this.setState({ display: newJobs })
    this.props.destroyJob(deptID, jobID)
  }

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

  editJob = (single) => {
    this.setState({editedName: single.name, name: single.name, pay_rate: single.pay_rate, pay_type: single.pay_type, visible_id: '', slide: 0})
  }

  updateJob = () => {
    const parse = parseFloat(this.state.pay_rate)
      const single = {name: this.state.name, pay_rate: parse, pay_type: this.state.pay_type.toLowerCase()}
      this.props.updateJob(single, this.props.subDeptID)
      console.log(this.state.displayJobs)
      console.log(single)
      let newArray = this.state.displayJobs.filter( item => {
        item.name !== this.state.editedName
      } )
      newArray.push(single)
      console.log(newArray)
      this.setState({displayJobs: [newArray, single]})
      this.setState({name: "", payrate: "", pay_rate: "", slide: 1})
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
                <Table.Cell>
                  <HomeParagraph>
                    {single.name}
                  </HomeParagraph>
                </Table.Cell>
                <Table.Cell style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} singleLine={true}>
                  <HomeParagraph>{single.pay_type}</HomeParagraph>
                  <br/>
                  <RaisedButton label="Edit" labelColor={"#0d0047"} style={{margin: '12px', color: 'white'}} onClick={() => this.editJob(single)} />
                  <br/>
                  <RaisedButton label="Delete" secondary={true} style={{margin: '12px'}} onClick={() => this.destroyJob(single.department_id, single.id)} />
                </Table.Cell>
              </Table.Row>
          )
        })}
          </Table.Body>
        </Table>
        </HomeDiv>
      )
  }
  
  render() {
    if (this.state.slide === 1) {
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
            width={'100%'}
            flexDirection={'row'}
          >
            <HomeDiv
              onClick={this.state.slide === 1 ? this.appendJob : this.updateJob }
              height={'50px'}
              width={'25%'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
              {this.state.slide === 1 ? "Add Job" : "Update Job"}
            </HomeDiv>  
            <HomeDiv
              onClick={this.state.slider === 1 ? this.props.back : () => this.setState({slide: 0 }) }
              height={'50px'}
              width={'25%'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
              {this.state.slide === 1 ? "Finished" : "Back"}
            </HomeDiv>  
          </HomeDiv>
        </HomeDiv>
      )} else {
        return(
          <HomeDiv
          >
          <HomeDiv
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
            width={'100%'}
            flexDirection={'row'}
          >
            <HomeDiv
              onClick={this.state.slide === 1 ? this.appendJob : this.updateJob }
              height={'50px'}
              width={'25%'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
              {this.state.slide === 1 ? "Add Job" : "Update Job"}
            </HomeDiv>  
            <HomeDiv
              onClick={this.state.slider === 1 ? this.props.back : () => this.setState({slide: 1 }) }
              height={'50px'}
              width={'25%'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
              {this.state.slide === 1 ? "Finished" : "Back"}
            </HomeDiv>  
          </HomeDiv>
        </HomeDiv>
        )
      }
  }
}

export default JobsForm;
