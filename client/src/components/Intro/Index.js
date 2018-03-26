import React, { Component } from 'react';

import First from './First'
import Second from './Second'
import Third from './Third'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HHeader, HSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';

class Index extends Component {
  state = { slide: 1 }

  incrementState = () => {
    this.setState({ slide: this.state.slide + 1 })
  }

  render() {
    const { slide } = this.state;
    let component = null
    if (slide === 1){
      component = <First increment={this.incrementState}/>
    } else if (slide === 2) {
      component = <Second increment={this.incrementState} />
    } else if (slide === 3) {
      component = <Third increment={this.incrementState} />
    } else {
      return(
        <HomeHeader>
          This ends my basic introduction to Home<br/>~ Mr. Peterson
        </HomeHeader>
      )
    }

    return(
      component
    );
  }
}

export default Index;
