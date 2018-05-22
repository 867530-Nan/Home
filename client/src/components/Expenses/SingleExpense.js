import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { appendExpense } from '../../actions/expenses'
import { HomeInput, HomeDiv, HomeHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import TextField from 'material-ui/TextField';
import { Form, Dropdown } from 'semantic-ui-react'

let departmentList = []

class SingleEmployee extends React.Component {  
  state = { number: 0, name: "", amount: "", departmentID: ""}

  componentDidMount() {
    this.setDepartmentList(this.props.departments)
  }

  setDepartmentList = (departments) => {
    for (let i = 0; i < departments.length; i += 1) {
      const department = { text: departments[i].name, value: departments[i].id }
      departmentList.push(department)
      if (departments[i].children) {
          const childDepartment = this.setDepartmentList(departments[i].children)
      }
    }
    this.setState({ departmentList: departmentList })
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  addExpense = () => {
    if (this.state.name === ""){
      alert("Please enter a valid name")
      this.setState({ name: "" })
    } else if (this.state.amount === "") {
      alert("Please enter a valid amount")
      this.setState({ amount: "" })
    } else if (this.state.departmentID === "") {
      alert("Please select a department")
      this.setState({ departmentID: "" })
    } else {
      const singleExpense = {amount: this.state.amount, name: this.state.name}
      this.props.dispatch(appendExpense(singleExpense))
      this.setState({ name: "", amount: "" })
      this.props.back()
    }
  }

  render() {

    return(
      <HomeDiv
        height={'100%'}
        backgroundColor={HomeStyleGuide.color.white}
        padding={'2%'}
        width={'100%'}
      >
          <HomeHeader
            fontSize={HomeStyleGuide.font.size.medium}
          >
            Expense Information:
          </HomeHeader>
          <TextField
            hintText="Enter a Budget Expense Name"
            floatingLabelText="Budget Expense Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            style={{width: '80%'}}
            autoFocus={true}
          />
          <TextField
            hintText="Enter a Budget Expense Amount"
            floatingLabelText="Budget Expense Amount"
            id="amount"
            onChange={this.handleChange}
            value={this.state.amount}
            style={{width: '80%'}}
          />
          <HomeDiv
            flexDirection={'row'}
            width={'80%'}
            justifyContent={'space-around'}
          >
            <TextField
              hintText="Enter / Create the Expense Items ID"
              floatingLabelText="Expense Item Invenentory ID (optional)"
              id="item_id"
              onChange={this.handleChange}
              value={this.state.item_id}
              style={{width: '40%'}}
            />
            <Dropdown style={{width: '40%'}} placeholder='Choose Department' fluid selection options={this.state.departmentList} onChange={(e, d)=>this.setState({departmentID: d.value})} />
        </HomeDiv>
        <HomeDiv
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'space-around'}
        >  
          <HomeDiv
            onClick={this.addExpense}
            height={'50px'}
            width={'25%'}
            boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
            backgroundColor={HomeStyleGuide.color.featherGreen}
            borderRadius={'2px'}
            hoverBackgroundColor={HomeStyleGuide.color.white}
            hoverColor={HomeStyleGuide.color.black}
            cursor={'pointer'}
            >
              <HomeParagraph
                width={'100%'}
                textAlign={'center'}
                color={HomeStyleGuide.color.white}
              >
                Add Expense
              </HomeParagraph>
          </HomeDiv>
          <HomeDiv
            onClick={this.props.back}
            height={'50px'}
            width={'25%'}
            boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
            backgroundColor={HomeStyleGuide.color.featherRed}
            borderRadius={'2px'}
            hoverBackgroundColor={HomeStyleGuide.color.white}
            hoverColor={HomeStyleGuide.color.black}
            cursor={'pointer'}
            >
              <HomeParagraph
                width={'100%'}
                textAlign={'center'}
                color={HomeStyleGuide.color.white}
              >
                Back
              </HomeParagraph>
          </HomeDiv> 
        </HomeDiv>
      </HomeDiv>
    );
  }
} export default SingleEmployee