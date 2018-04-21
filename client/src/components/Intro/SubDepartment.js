import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleSubDepartment from './SingleSubDepartment'

class DepartmentIntroduction extends Component {
  state = { number: 0, departments: [], subDepartments: [], name: "", budget: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  componentDidMount() {
    axios.get('/api/hotels/0/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  appendSubDepartment = () => {
      const single = {name: this.state.name, budget: this.state.budget}
      this.state.subDepartments.push(single)
  }

  displaySubDepartments = () => {
    return this.state.subDepartments.map( (single, index) => {
      return (
        <HomeDiv
          flexDirection={'row'}
        >
          <HomeSectionHeader>
            {single.name}
          </HomeSectionHeader>
          <HomeSectionHeader>
            {single.budget}
          </HomeSectionHeader>
        </HomeDiv>
      )
    })
  }

  displayDepartments = () => {
    return this.state.departments.map( (single, i) => {
      return(
        <HomeDiv
          height={'100vh'}
          width={'100%'}
        >
            <HomeHeader
              fontSize={HomeStyleGuide.font.size.medium}
            >
              {single}
            </HomeHeader>
            {this.displaySubDepartments()}
            <SingleSubDepartment subdepartments={this.state.subdepartments} />
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
