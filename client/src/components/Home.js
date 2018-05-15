import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { HomeDiv } from './generic/GenericStyledComponents';
import HomeStyleGuide from './generic/HomeStyleGuide';

class Home extends Component {
  render() {
    return(
      <div>
        <HomeDiv
          width={'100%'}
          backgroundColor={HomeStyleGuide.color.lightgray}
          height={'600px'}
        >
          Splash Image Placeholder
        </HomeDiv>
        <HomeDiv
          height={'500px'}
          flexDirection={'row'}
          padding={'0'}
        > 
          <HomeDiv
            width={'50%'}
            height={'100%'}
            backgroundColor={HomeStyleGuide.color.lightblue}
          >
            Left half
          </HomeDiv>
          <HomeDiv
            width={'50%'}
            height={'100%'}
            borderLeft={`1px solid ${HomeStyleGuide.color.white}`}
            backgroundColor={HomeStyleGuide.color.lightgreen}
          >
            Right half
          </HomeDiv>
        </HomeDiv>
        <HomeDiv
          height={'300px'}
          width={'100%'}
        >
          Footer Placeholder
        </HomeDiv>
      </div>
      
    );
  }
}

export default Home;
