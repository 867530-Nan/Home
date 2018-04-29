import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import First from './First'
import Second from './Second'
import HotelIntroduction from './HotelIntroduction'
import DepartmentInformation from '../Departments/DepartmentInformation'
import EmployeeGatherContainer from '../Employees/EmployeeGatherContainer';
import EnterExpenses from '../Expenses/EnterExpenses'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HHeader, HSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import {getHotel} from '../../actions/Hotel'

class Index extends Component {
  state = { slide: 5, user: this.props.user }

  componentDidMount(){

  }

  incrementState = () => {
    this.setState({ slide: this.state.slide + 1 })
  }

  decrementState = () => {
    this.setState({ slide: this.state.slide - 1 })
  }

  render() {
    const { slide } = this.state;
    let component = null
    if (slide === 1){
      component = <First increment={this.incrementState}/>
    } else if (slide === 2) {
      component = <Second increment={this.incrementState} />
    }  else if (slide === 3) {
      component = <DepartmentInformation increment={this.incrementState} />
    } else if (slide === 4) {
      component = <EmployeeGatherContainer increment={this.incrementState} decrement={this.decrementState} />
    } else if (slide === 5) {
      component = <EnterExpenses increment={this.incrementState} decrement={this.decrementState} />
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

const mapStateToProps = (state) => {
  return(
    { user: state.user }
  )
}

export default connect(mapStateToProps)(Index);
