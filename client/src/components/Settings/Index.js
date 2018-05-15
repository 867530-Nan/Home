import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { HomeDiv } from '../generic/GenericStyledComponents';
import HomeStyleGuide from '../generic/HomeStyleGuide';

class Settings extends Component {
  render() {
    return(
      <HomeDiv
        width={'100%'}
        backgroundColor={HomeStyleGuide.color.lightgray}
        height={'600px'
      }
      >
        Settings Placeholder
      </HomeDiv>
      
    );
  }
}

export default Settings;
