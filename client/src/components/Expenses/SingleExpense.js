import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import TextField from 'material-ui/TextField';
import { Form } from 'semantic-ui-react'

class SingleEmployee extends React.Component {  
  state = { number: 0, name: "", amount: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  nextPage = () => {
    if (this.state.name === ""){
      alert("Please enter a valid name")
      this.setState({ name: "" })
    } else if (this.state.amount === "") {
      alert("Please enter a valid amount")
      this.setState({ amount: "" })
    } else {
      const singleExpense = {amount: this.state.amount, name: this.state.name}
      this.props.appendExpense(singleExpense)
      this.setState({ name: "", amount: "" })
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
          >
            <HomeDiv
              onClick={this.nextPage}
              height={'50px'}
              width={'100%'}
              margin={'30px 20px 0 0'}
              border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
              borderRadius={'2px 2px 0 0'}
              hoverBackgroundColor={HomeStyleGuide.color.lightgray}
              hoverColor={HomeStyleGuide.color.white}
              cursor={'pointer'}
            >
              Add Expense
            </HomeDiv>
          </HomeDiv>
      </HomeDiv>
    );
  }
} export default SingleEmployee