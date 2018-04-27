import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class SingleSubDepartment extends Component {
  state = { name: "", budget: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendSubDepartment = () => {
    const single = {name: this.state.name, budget: this.state.budget, departmentID: this.props.departmentID}
    this.props.appendSubDepartment(single)
    this.setState({name: "", budget: ""})
}
  
  render() {
    return(
        <HomeDiv
        flexDirection={'column'}
      >
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
    );
  }
}

export default SingleSubDepartment;
