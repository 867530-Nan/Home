import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import SingleSubDepartment from './SingleSubDepartment'

class SubDepartment extends Component {
  state = { number: 0, departments: [], subDepartments: [], name: "", budget: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }


  componentWillMount() {
    axios.get('/api/hotels/1/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  appendSubDepartment = (single) => {
    console.log("here")
    console.log(single)
      // this.state.subDepartments.push(single)
      this.setState({subDepartments: [...this.state.subDepartments, single]})
  }

  displaySubDepartments = (departmentIndex) => {
    const result = this.state.subDepartments.filter(single => single.departmentID === departmentIndex)
    return result.map( (single, index) => {
      return (
        <HomeDiv
          flexDirection={'row'}
          backgroundColor={index % 2 === 0 ? `${HomeStyleGuide.color.white}` : `${HomeStyleGuide.color.gray}`}
          width={'80%'}
          borderRadius={'5px'}
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
          height={'100%'}
          margin={'50px 0'}
          width={'100%'}
        >
            <HomeHeader
              fontSize={HomeStyleGuide.font.size.medium}
            >
              {single.name}
            </HomeHeader>
            {this.displaySubDepartments(i)}
            <SingleSubDepartment appendSubDepartment={this.appendSubDepartment} departmentID={i}/>
          </HomeDiv>
        )
      })
  }

  
  render() {
    return(
      <HomeDiv
        height={'100%'}
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
            Next, <br/>Let's add Subdepartment information..
          </HomeHeader>
            {this.state.departments.length !== 0 && this.displayDepartments()}
            <HomeDiv
              flexDirection={'row'}
              width={'80%'}
            >
            { this.state.subDepartments !== [] ? this.props.displayButton() : null  }
            { this.props.displayBackButton () }
            </HomeDiv>
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default SubDepartment;
