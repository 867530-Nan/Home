import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class DepartmentIntroduction extends Component {
  state = { name: "", budget: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }
  
  render() {
    return(
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
    );
  }
}

export default DepartmentIntroduction;
