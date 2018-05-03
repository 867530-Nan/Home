import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class JobsForm extends Component {
  state = { name: "", payrate: "", paytype: "", currentInput: []}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendJob = () => {
    const single = {name: this.state.name, payrate: this.state.payrate, paytype: this.state.paytype, subDeptID: this.props.subDeptID}
    this.props.appendJob(single)
    this.setState({currentInput: [...this.state.currentInput, single]})
    this.setState({name: "", payrate: "", paytype: ""})
  }

  displayInput = () => {
    return(
      <HomeDiv
        flexDirection={'row'}
        width={'100%'}
      >
        {this.state.currentInput.map( single => {
          return(
            <div>
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.payrate}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.paytype}
              </HomeSectionHeader>
            </div>
          )
        })}
        </HomeDiv>
    )
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
          {this.displayInput()}
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
            value={this.state.payrate}
            label='' 
            placeholder="Pay Rate" 
            id="payrate"
            onChange={this.handleChange}
          />
          <HomeInput
            width={'80%'} 
            fluid 
            value={this.state.paytype}
            label='' 
            placeholder="Pay Type" 
            id="paytype"
            onChange={this.handleChange}
          />
        </HomeDiv>
        <HomeDiv
          onClick={this.appendJob}
          height={'50px'}
          width={'25%'}
          border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
          borderRadius={'2px'}
          hoverBackgroundColor={HomeStyleGuide.color.darkgray}
          hoverColor={HomeStyleGuide.color.white}
          cursor={'pointer'}
          >
          Add Job
        </HomeDiv>  
        <HomeDiv
          onClick={this.props.back}
          height={'50px'}
          width={'25%'}
          border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
          borderRadius={'2px'}
          hoverBackgroundColor={HomeStyleGuide.color.darkgray}
          hoverColor={HomeStyleGuide.color.white}
          cursor={'pointer'}
          >
          Finished
        </HomeDiv>  
      </HomeDiv>
    );
  }
}

export default JobsForm;
