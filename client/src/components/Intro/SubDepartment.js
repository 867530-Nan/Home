import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class DepartmentIntroduction extends Component {
  state = { number: 0, subDepartments: [], name: "", budget: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendSubDepartment = () => {
      const single = {name: this.state.name, budget: this.state.budget}
      this.state.subDepartments.push(single)
  }

  displayDepartments = () => {
    return this.props.departments.map( (single, i) => {
      return(
        <HomeDiv
          height={'100vh'}
          width={'100%'}
        >
            <HomeHeader
              fontSize={HomeStyleGuide.font.size.medium}
            >
              {single.name}
            </HomeHeader>
            <HomeDiv
              flexDirection={'row'}
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
                placeholder="Sub-Department's Monthly Budget" 
                id="budget"
                onChange={this.handleChange}
              />
            </HomeDiv>
              <HomeDiv
                onClick={this.appendSubDepartment}
                height={'50px'}
                width={'25%'}
                border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
                borderRadius={'20px'}
                hoverBackgroundColor={HomeStyleGuide.color.darkgray}
                hoverColor={HomeStyleGuide.color.white}
                cursor={'pointer'}
              >
                Add Sub-Department
              </HomeDiv>
          </HomeDiv>
        )
      })
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
            Next, add Subdepartment information
          </HomeHeader>
            {this.displayDepartments()}
            <HomeDiv
              flexDirection={'row'}
            >
            { this.state.subDepartments !== [] ? this.props.displayButton() : null  }
            { this.props.displayBackButton () }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default DepartmentIntroduction;
