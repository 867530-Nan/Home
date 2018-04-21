import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import DepartmentBox from './DepartmentBox'
import SubDepartmentBox from './SubDepartment'

class DepartmentIntroduction extends Component {
  state = { number: 0, departments: [], input: "", increment: 0 }

  componentDidMount() {
    axios.get('/api/hotels')
    .then (res => console.log(res) )
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendDepartment = (name) => {
    this.state.departments.push({name: name})
    this.setState({input: ""})
  }

  displayDepartments = () => {
    return(
      this.state.departments.map( (single, index) => {
        return(
          <HomeHeader>
            {single.name}
          </HomeHeader>
        )
      })
    )
  }

  departmentIncrement = () => {
    axios.post('/api/hotels/0/departments', this.state.departments)
        .then( res => {
          this.setState({ increment: this.state.increment + 1})
          }).catch( err => {
            console.log("error")
            console.log(err)
        });
    
  }
  
  displayDepartmentIncrement = () => {
    return (
      <HomeDiv
        onClick={this.departmentIncrement}
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

  addingSubdepartments = () => {
    
  }
  
  render() {
    switch (this.state.increment){
    case 0:
      return <DepartmentBox appendDepartment={this.appendDepartment} displayDepartments={this.displayDepartments} handleChange={this.handleChange} displayButton={this.displayDepartmentIncrement} departments={this.state.departments}/>
    case 1: 
      return <SubDepartmentBox appendDepartment={this.appendDepartment} departments={this.state.departments} displayButton={this.displayButton}/>
    }
  }
}

export default DepartmentIntroduction;
