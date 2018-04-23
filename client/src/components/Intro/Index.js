import React, { Component } from 'react';

import First from './First'
import Second from './Second'
import LaborExpenseCPOR from './LaborExpenseCPORIntro'
import HotelIntroduction from './HotelIntroduction'
import DepartmentInformation from './DepartmentInformation'

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
      component = <HotelIntroduction increment={this.incrementState} />
    } else if (slide === 4) {
      component = <DepartmentInformation increment={this.incrementState} />
    } else if (slide === 5) {
      component = <LaborExpenseCPOR increment={this.incrementState} />
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
