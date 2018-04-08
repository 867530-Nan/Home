import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class DepartmentIntroduction extends Component {
  state = { number: 0, departments: [], input: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendDepartment = () => {
    this.state.departments.push(this.state.input)
    this.setState({input: ""})
  }

  displayDepartments = () => {
    return(
      this.state.departments.map( (single, index) => {
        return(
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.departments[index]}
            label='' 
            placeholder={this.state.departments[index]} 
            id="input"
          />
        )
      })
    )
  }
  
  displayButton = () => {
    return (
      <HomeDiv
        onClick={this.props.increment}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next
      </HomeDiv>
    )
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
            Now we'll gather information regarding your Hotel's Departments
          </HomeHeader>
            {this.displayDepartments()}
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.input}
              label='' 
              placeholder='Department Name' 
              id="input"
              onChange={this.handleChange}
            />
            <HomeDiv
              onClick={this.appendDepartment}
              height={'50px'}
              width={'25%'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'20px'}
              hoverBackgroundColor={HomeStyleGuide.color.darkgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
            >
              Add Department
            </HomeDiv>
            { this.state.departments !== [] ? this.displayButton() : null  }
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default DepartmentIntroduction;
