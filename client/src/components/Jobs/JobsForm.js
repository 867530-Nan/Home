import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import { getJobs } from '../../actions/jobs'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import { Form, Icon, Label, Menu, Table, Checkbox } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import { __esModule } from 'react-redux/lib/connect/connect';
import { addJob, destroyJob, updateJob } from '../../actions/jobs'


class JobsForm extends Component {
  state = { name: "", pay_rate: undefined, pay_type: "", job_id: undefined, currentInput: [], departmentList: [], departmentID: undefined, displayJobs: [], slide: 1 }

  componentDidMount() {
    this.props.dispatch(getJobs(this.props.subDeptID))
  }

  updateJob = (single, departmentID) => {
    
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleRadio = (e, { value }) => this.setState({ pay_type: value })

  destroyJob = (deptID, jobID) => {
    const newJobs = this.props.jobs.filter(single => single.id !== jobID)
    this.setState({ display: newJobs })
    this.props.dispatch(destroyJob(deptID, jobID))
  }

  appendJob = () => {
    if (this.state.name === "" || this.state.pay_rate === undefined || this.state.pay_type === ""){
      alert("Please fill out all fields")
      this.setState({ name: "", pay_rate: undefined, pay_type: "" })
    } else {
      const parse = parseFloat(this.state.pay_rate)
      const single = {name: this.state.name, pay_rate: parse, pay_type: this.state.pay_type.toLowerCase()}
      this.props.dispatch(addJob(single, this.props.subDeptID))
      this.setState({displayJobs: [...this.state.displayJobs, single]})
      this.setState({name: "", payrate: "", pay_rate: ""})
    }
  }

  editJob = (single) => {
    this.setState({editedName: single.name, name: single.name, pay_rate: single.pay_rate, pay_type: single.pay_type, job_id: single.id, slide: 0})
  }

  updateJob = () => {
    const parse = parseFloat(this.state.pay_rate)
      const single = {name: this.state.name, pay_rate: parse, pay_type: this.state.pay_type.toLowerCase(), id: this.state.job_id}
      this.props.dispatch(updateJob(single, this.props.subDeptID))
      let newArray = this.state.displayJobs.filter( item => {
        item.name !== this.state.editedName
      } )
      newArray.push(single)
      this.setState({displayJobs: newArray})
      this.setState({name: "", payrate: "", pay_rate: "", slide: 1})
  }

  displayJobs = (subIndex) => {
      return(
        <HomeDiv
        width={'100%'}
        margin={'45px 0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Jobs for {this.props.singleDepartmentName}
        </HomeSectionHeader>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{textAlign: 'center'}}>Name</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}}>Pay Type</Table.HeaderCell>
              <Table.HeaderCell style={{textAlign: 'center'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {this.props.jobs.map( (single, index) => {
          return (
              <Table.Row
                key={index}
              >
                <Table.Cell>
                  <HomeParagraph
                    width={'100%'}
                    textAlign={'center'}
                  >
                    {single.name}
                  </HomeParagraph>
                </Table.Cell>
                <Table.Cell>
                  <HomeParagraph
                    textAlign={'center'}
                    width={'100%'}
                  >
                    {single.pay_type}
                  </HomeParagraph>
                </Table.Cell>
                <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <RaisedButton label="Edit" backgroundColor={HomeStyleGuide.color.skyBlue} style={{margin: '12px', color: 'white'}} onClick={() => this.editJob(single)} />
                  <br/>
                  <RaisedButton label="Delete" backgroundColor={HomeStyleGuide.color.white} style={{margin: '12px'}} onClick={() => this.destroyJob(single.department_id, single.id)} />
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
            { this.props.jobs && this.displayJobs()}
            <HomeDiv
              flexDirection={'row'}
              width={'100%'}
              justifyContent={'space-around'}
              margin={'40px 0 0 0'}
            >
              <TextField
                hintText="Enter Job Title"
                floatingLabelText="Job Title"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                style={{width: '40%'}}
                autoFocus={true}
              />
              <TextField
                hintText="Enter Pay Rate"
                floatingLabelText="Pay Rate"
                id="pay_rate"
                onChange={this.handleChange}
                value={this.state.pay_rate}
                style={{width: '40%'}}
              />
            </HomeDiv>
            <Form
              style={{margin: '15px 0 30px 0'}}
            >
              <Form.Field>
                This position is paid: <b>{this.state.pay_type === "" ? "PLEASE SELECT FROM BELOW" : this.state.pay_type }</b>
              </Form.Field>
              <HomeDiv>
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
              </HomeDiv>
            </Form>
          </HomeDiv>
          <HomeDiv
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-around'}
          >
            <HomeDiv
              onClick={this.state.slide === 1 ? this.appendJob : this.updateJob }
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
                  Add Job
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
                 textAlign={'center'}
                  width={'100%'}
                  color={HomeStyleGuide.color.white}
                >
                  Back
                </HomeParagraph>
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
            justifyContent={'space-around'}
          >
            <HomeDiv
              onClick={this.updateJob}
              height={'50px'}
              width={'25%'}
              boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
              backgroundColor={HomeStyleGuide.color.featherGreen}
              hoverBackgroundColor={HomeStyleGuide.color.white}
              fontSize={HomeStyleGuide.font.size.mediumSmall}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
                <HomeParagraph
                textAlign={'center'}
                  width={'100%'}
                >
                  Update Job
                </HomeParagraph>
            </HomeDiv>  
            <HomeDiv
              onClick={() => this.setState({slide: 1 })}
              height={'50px'}
              width={'25%'}
              backgroundColor={HomeStyleGuide.color.featherRed}
              fontSize={HomeStyleGuide.font.size.mediumSmall}
              borderRadius={'2px'}
              hoverBackgroundColor={HomeStyleGuide.color.white}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
              >
                <HomeParagraph
                  textAlign={'center'}
                  color={HomeStyleGuide.color.white}
                  width={'100%'}
                >
                  Back
                </HomeParagraph>
            </HomeDiv>  
          </HomeDiv>
        </HomeDiv>
        )
      }
  }
}

const mapStateToProps = state => {
  return{
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(JobsForm);
