import React, { Component } from 'react';
import axios from 'axios'
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';



class SubDepartmentForm extends Component {
  state = { 
    name: "", 
    budget: "", 
    currentInput: [], 
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendSubDepartment = () => {
    const single = {name: this.state.name, budget: this.state.budget, departmentID: this.props.departmentID}
    this.props.appendVisibleSubDepartment(single)
    this.setState({currentInput: [...this.state.currentInput, single]})
    this.setState({name: "", budget: ""})
  }

  displayInput = () => {
    return(
      <HomeDiv
        width={'100%'}
        margin={'0'}
        padding={'0'}
      >
        <HomeSectionHeader>
          Sub-Departments
        </HomeSectionHeader>
        <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sub-Department Name</Table.HeaderCell>
              <Table.HeaderCell>Budget</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {this.state.currentInput.map( (single, index) => {
          return (
              <Table.Row>
                <Table.Cell>{single.name}</Table.Cell>
                <Table.Cell>{single.budget}</Table.Cell>
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
        flexDirection={'column'}
      >
        <HomeDiv
          margin={'40px 0'}
          width={'75%'}
          >
          {this.state.currentInput.length > 0 && this.displayInput()}
        </HomeDiv>
        <HomeDiv
          flexDirection={'row'}
          width={'90%'}
        >
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.name}
            label='' 
            placeholder='Sub-Department Name' 
            id="name"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.budget}
            label='' 
            placeholder="Monthly Budget" 
            id="budget"
            onChange={this.handleChange}
          />
        </HomeDiv>
        <HomeDiv
          flexDirection={'row'}
          width={'80%'}
        >
          <HomeDiv
            onClick={this.appendSubDepartment}
            height={'50px'}
            width={'50%'}
            margin={'20px'}
            border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
            borderRadius={'2px'}
            hoverBackgroundColor={HomeStyleGuide.color.darkgray}
            hoverColor={HomeStyleGuide.color.white}
            cursor={'pointer'}
            >
            Add Sub-Department
          </HomeDiv>  
          <HomeDiv
            onClick={this.props.back}
            height={'50px'}
            width={'50%'}
            margin={'20px'}
            border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
            borderRadius={'2px'}
            hoverBackgroundColor={HomeStyleGuide.color.darkgray}
            hoverColor={HomeStyleGuide.color.white}
            cursor={'pointer'}
            >
            Finished
          </HomeDiv>  
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default SubDepartmentForm;
