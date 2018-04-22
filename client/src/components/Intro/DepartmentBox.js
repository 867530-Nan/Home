import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class DepartmentBox extends React.Component {  
  state = { number: 0, name: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  nextPage = () => {
    if (this.state.name === ""){
      alert("Please enter a valid department name")
      this.setState({name: ""})
    } else {
      this.setState({name: ""})
      this.props.appendDepartment(this.state.name)
    }
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
            Next, enter Department info
          </HomeHeader>
          {this.props.displayDepartments()}
          <HomeInput
                width={'80%'} 
                fluid 
                value={this.state.name}
                label='' 
                placeholder='Department Name' 
                id="name"
                onChange={this.handleChange}
              />
            <HomeDiv
              onClick={this.nextPage}
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
            {this.props.departments.length !== 0 && this.props.displayButton()}
        </HomeDiv>
      </HomeDiv>
    );
  }
}
 export default DepartmentBox