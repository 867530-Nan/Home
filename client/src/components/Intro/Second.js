import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeParagraph } from '../generic/GenericStyledComponents';

class Second extends Component {
  render() {
    return(
      <HomeDiv
        height={'100vh'}
        backgroundColor={HomeStyleGuide.color.darkblue}
      >
        <HomeDiv
          padding={'5% 2%'}
          width={'80%'}
          margin={'30px'}
          borderRadius={'20px'}
          backgroundColor={HomeStyleGuide.color.white}
        >
          <HomeSectionHeader
            padding={'2%'}
            margin={'30px 0 10px 0'}
            fontWeight={'300'}
          >
            In order to calculate the appropriate staffing levels, we will need to establish the budgets and forecast
          </HomeSectionHeader>
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
            <HomeParagraph>
              Data
            </HomeParagraph>
          </HomeDiv>
        </HomeDiv>
      </HomeDiv>
    );
  }
}

export default Second;
