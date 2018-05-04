import React, { Component } from 'react';
import axios from 'axios'
import { Dropdown } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class DepartmentBox extends React.Component {  
  state = { number: 0, name: "", budget: undefined, month: 13}

  handleChange = (e) => {
    const { id , value } = e.target;
    console.log(id + "    " + value)
    if (id === "budget"){
      const newthing=parseFloat(value)
      this.setState({ budget: newthing });
    } else {
      this.setState({ [id]: value });
    }
  }

  handleMonth = (e, i, v) => {
    this.setState({ month: v })
  }

  nextPage = () => {
    if (this.state.name === ""){
      alert("Please enter a valid department name")
      this.setState({name: ""})
    } else if (this.state.budget === "" ){
      alert("Please enter a valid department budget")
      this.setState({budget: ""})
    } else if (this.state.month > 12){
      alert("Please enter a valid department month")
      this.setState({month: 13})
    } else {
      this.setState({name: "", budget: ""})
      const subdepartment = {name: this.state.name, budget: this.state.budget}
      this.props.appendDepartment(subdepartment)
    }
  }

  SetMonth = () => {
    const options = [      
      {
        text: "January",
        value: "January"
      },
      {
        text: "February",
        value: "February"
      },
      {
        text: "March",
        value: "March"
      },
      {
        text: "April",
        value: "April"
      },
      {
        text: "May",
        value: "May"
      },
      {
        text: "June",
        value: "June"
      },
      {
        text: "July",
        value: "July"
      },
      {
        text: "August",
        value: "August"
      },
      {
        text: "September",
        value: "September"
      },
      {
        text: "October",
        value: "October"
      },
      {
        text: "November",
        value: "November"
      },
      {
        text: "December",
        value: "December"
      },
      {
        text: "Select Month",
        value: "Select Month"
      },
    ]
    return (
      <DropDownMenu value={this.state.month} id="month" onChange={this.handleMonth} style={{width: '50%'}} anchorOrigin={{vertical: 'center', horizontal: 'middle'}}>
        {options.map( (single, index) => {return <MenuItem value={index+1} primaryText={single.text} />})}
      </DropDownMenu>
    )
  }

  render() {
//comment
    return(
      <HomeDiv
        height={'100vh'}
        backgroundColor={HomeStyleGuide.color.darkgreen}
      >
        <HomeDiv  
          width={'100%'}
          backgroundColor={HomeStyleGuide.color.white}
          borderRadius={'2px'}
          padding={'2%'}
          >
          <HomeHeader
            fontSize={HomeStyleGuide.font.size.medium}
          >
            Step 1: Sub-Departments
          </HomeHeader>
          <HomeSectionHeader
            fontSize={HomeStyleGuide.font.size.mediumSmall}
          >
            First: Pick the month you're working on,<br/>Second: Enter a sub-department for your department,<br/>Last: Enter the respective budget
          </HomeSectionHeader>
          {this.SetMonth()}
          {this.props.displayDepartments()}
          <TextField
            hintText="Enter Sub-Department Name"
            floatingLabelText="Sub-Department Name"
            id="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            style={{width: '80%'}}
            underlineStyle={`${HomeStyleGuide.color.lightblue}`}
          />
          <TextField
            hintText="Enter the Sub-Department's Budget"
            floatingLabelText="Sub-Department's Budget"
            id="budget"
            onChange={this.handleChange}
            type="number"
            value={this.state.budget}
            style={{width: '80%'}}
            underlineStyle={`${HomeStyleGuide.color.lightblue}`}
          />
              <HomeDiv
                flexDirection={'row'}
                width={'80%'}
              >
                <HomeDiv
                  onClick={this.nextPage}
                  height={'50px'}
                  width={'25%'}
                  margin={'0 10px'}
                  border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
                  borderRadius={'2px'}
                  hoverBackgroundColor={HomeStyleGuide.color.darkgray}
                  hoverColor={HomeStyleGuide.color.white}
                  cursor={'pointer'}
                >
                  Add Department
                </HomeDiv>
                {this.props.departments.length !== 0 && this.props.displayButton()}
              </HomeDiv>
        </HomeDiv>
      </HomeDiv>
    );
  }
}
 export default DepartmentBox