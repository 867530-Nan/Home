import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeParagraph, media } from '../generic/GenericStyledComponents';


const DemoResponsiveDiv = HomeDiv.extend`
  
  width: 100%;

  &:hover {
    background-color: ${HomeStyleGuide.color.lightgreen};
  }

  ${media.tablet`
    background-color: ${HomeStyleGuide.color.darkblue};
  `}
`

class First extends Component {
  render() {
    return(
      <DemoResponsiveDiv
        height={'100vh'}
        backgroundColor={HomeStyleGuide.color.darkgreen}
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
            Welcome to Hotel Operations Made Easy.
            <br/>
            (H.O.M.E.)
            <br/>
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
              Start
            </HomeParagraph>
          </HomeDiv>
        </HomeDiv>
      </DemoResponsiveDiv>
    );
  }
}

export default First;
