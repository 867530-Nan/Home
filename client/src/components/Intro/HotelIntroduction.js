import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

class HotelIntroduction extends Component {
  state = {street_one: "", name: "", phone_number: "", number_of_rooms: "", manager: "", city: "", state: "", country: "", zip: ""}

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }
  
  displayButton = () => {
    return (
      <HomeDiv
        onClick={this.props.increment}
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
            First,<br/>please enter information regarding your Hotel
          </HomeHeader>
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.name}
              label='' 
              placeholder="Hotel's Name"
              id="name"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.street_one}
              label='' 
              placeholder="Hotel's Street Number"
              id="street_one"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.city}
              label='' 
              placeholder="Hotel's City"
              id="city"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.state}
              label='' 
              placeholder="Hotel's State" 
              id="state"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.country}
              label='' 
              placeholder="Hotel's Country" 
              id="country"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.zip}
              label='' 
              placeholder="Hotel's Zipcode" 
              id="zip"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.phone_number}
              label='' 
              placeholder='Phone Number' 
              id="phone_number"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.manager}
              label='' 
              placeholder='General Manager' 
              id="manager"
              onChange={this.handleChange}
            />
            <HomeInput
              width={'80%'} 
              fluid 
              value={this.state.number_of_rooms}
              label='' 
              placeholder='Number of Rooms' 
              id="number_of_rooms"
              onChange={this.handleChange}
            />
              { this.state.street_one !== "" && this.state.name !== "" && this.state.phone_number !== "" && this.state.generalManager !== "" && this.state.number_of_rooms !== "" ? this.displayButton() : null }
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default HotelIntroduction;
