import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import First from './First'
import Second from './Second'
import DashboardContainer from '../Dashboard/DashboardContainer'
import Departments from '../Dashboard/Departments'
import DepartmentForm from '../Dashboard/DepartmentForm'
import JobsForm from '../Jobs/JobsForm'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HHeader, HSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import {getHotel} from '../../actions/Hotel'
import { addSubDepartment } from '../../actions/departments'
import { addJob } from '../../actions/jobs'

class Index extends Component {
  state = { slide: 1, additionalDepartments: [], jobs: []}

  appendSubDepartment = (single) => {
      this.props.dispatch(addSubDepartment(single))
      this.setState({additionalDepartments: [...this.state.additionalDepartments, single]})
  }

  appendJob = (single) => {
    this.props.dispatch(addJob(single))
    this.setState({jobs: [...this.state.jobs, single]})
}

  incrementState = () => {
    this.setState({ slide: this.state.slide + 1 })
  }

  decrementState = () => {
    this.setState({ slide: this.state.slide - 1 })
  }

  departmentForm = () => {
    this.setState({ slide: 4 })
  }

  JobsForm = (prop) => {
    this.setState({ slide: 5, subDeptID: prop })
  }

  back = () => {
    this.setState({ slide: 3 })
  }

  render() {
    const { slide } = this.state;
    let component = null
    if (slide === 1){
      component = <First increment={this.incrementState}/>
    } else if (slide === 2) {
      component = <Second increment={this.incrementState} />
    }  else if (slide === 3) {
      component = <DashboardContainer />  
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


// render() {
//   const { slide } = this.state;
//   let component = null
//   if (slide === 1){
//     component = <First increment={this.incrementState}/>
//   } else if (slide === 2) {
//     component = <Second increment={this.incrementState} />
//   }  else if (slide === 3) {
//     component = <DepartmentInformation increment={this.incrementState} />
//   } else if (slide === 4) {
//     component = <EmployeeGatherContainer increment={this.incrementState} decrement={this.decrementState} />
//   } else if (slide === 5) {
//     component = <EnterExpenses increment={this.incrementState} decrement={this.decrementState} />
//   } else {
//     return(
//       <HomeHeader>
//         This ends my basic introduction to Home<br/>~ Mr. Peterson
//       </HomeHeader>
//     )
//   }

//   return(
//     component
//   );
// }
