import React, { Component } from 'react';
import axios from 'axios'
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeParagraph, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';



class DepartmentForm extends Component {
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
    const single = {name: this.state.name, parent_ID: this.props.departmentID}
    this.props.appendSubDepartment(single)
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
          width={'100%'}
          padding={'2%'}
        >
          <HomeSectionHeader>
            Add Sub-Departments
          </HomeSectionHeader>
        </HomeDiv>
        <HomeDiv
          margin={'40px 0'}
          width={'75%'}
          display={this.state.currentInput.length > 0 ? 'flex' : 'none'}
          >
          {this.state.currentInput.length > 0 && this.displayInput()}
        </HomeDiv>
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'space-around'}
          margin={'40px 0'}
        >
          <TextField
            hintText="Enter Sub-Department Name"
            floatingLabelText="Sub-Department Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            style={{width: '40%'}}
            autoFocus={true}
          />
          <TextField
            hintText="Enter Monthly Budget"
            floatingLabelText="Monthly Budget"
            id="budget"
            onChange={this.handleChange}
            value={this.state.budget}
            style={{width: '40%'}}
          />
        </HomeDiv>
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'space-around'}
        >
          <HomeDiv
            onClick={this.appendSubDepartment}
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
                Add Sub-Department
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
                Finished
              </HomeParagraph>
          </HomeDiv> 
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default DepartmentForm;
