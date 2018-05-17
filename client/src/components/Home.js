import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { HomeDiv, HomeSectionHeader, HomeHeader } from './generic/GenericStyledComponents';
import HomeStyleGuide from './generic/HomeStyleGuide';
import roomService from '../assets/images/roomService.jpg'
import holdTheDoor from '../assets/images/holdTheDoor.jpg'
import hotelHallway from '../assets/images/hotelHallway.jpg'

class Home extends Component {
  render() {
    return(
      <div>
        <HomeDiv
          background={`linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, .7)), url(${roomService})`}
          backgroundSize={'cover'}
          backgroundPosition={'top'}
          backgroundAttachment={'fixed'}
          height={'650px'}
          width={'100%'}
        >
          <HomeHeader
            fontWeight={'400'}
            width={'100%'}
            fontSize={HomeStyleGuide.font.size.large}
          >
            HOME
          </HomeHeader>
          <HomeSectionHeader
            fontWeight={'300'}
            width={'100%'}
            fontSize={HomeStyleGuide.font.size.medium}
          >
            (Hotel Operations Made Easy)
          </HomeSectionHeader>
        </HomeDiv>
        <HomeDiv
          height={'300px'}
          flexDirection={'row'}
          padding={'0'}
          backgroundColor={HomeStyleGuide.color.lightred}
        > 
          <HomeSectionHeader
            width={'50%'}
            height={'100%'}
            fontWeight={'300'}
            padding={'0 20px'}
            color={HomeStyleGuide.color.white}
          >
            A Streamlined solution to Hotel budgeting and Scheduling.
          </HomeSectionHeader>
          <HomeDiv
            width={'50%'}
            height={'100%'}
            background={`linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, .5)), url(${hotelHallway})`}
            backgroundSize={'cover'}
            backgroundPosition={'top'}
          />
        </HomeDiv>
        <HomeDiv
          height={'300px'}
          flexDirection={'row'}
          padding={'0'}
          backgroundColor={HomeStyleGuide.color.lightgreen}
        > 
          <HomeDiv
            width={'50%'}
            height={'100%'}
            background={`linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, .5)), url(${holdTheDoor})`}
            backgroundSize={'cover'}
            backgroundPosition={'top'}
          />
          <HomeSectionHeader
            width={'50%'}
            height={'100%'}
            fontWeight={'300'}
            padding={'0 20px'}
            color={HomeStyleGuide.color.white}
          >
            Tools for staffing, support with inventory, and overall planning for your hotel. 
          </HomeSectionHeader>
        </HomeDiv>
        <HomeDiv
          height={'300px'}
          width={'100%'}
          padding={'0 30px'}
        >
          <HomeSectionHeader
            fontWeight={'300'}
          >
            HOME<br/>- Hotel Opeartions Made Easy -<hr/>For a more information, email our team <a href="mailto:vonpaulbergen@gmail.com">here</a>.<br/>- Salt Lake City, Utah -
          </HomeSectionHeader>
        </HomeDiv>
      </div>
      
    );
  }
}

export default Home;
