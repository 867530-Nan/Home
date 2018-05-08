import React, {Component} from 'react'
import { HomeDiv, HomeSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';

class Departments extends Component {

  displayJobs = (subIndex) => {
    const result = this.props.jobs.filter(single => single.subDeptID === subIndex)
    return ( result.map( (single, index) => {
      return(
        <HomeDiv
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
            width={'80%'}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'75%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.payrate}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.paytype}
              </HomeSectionHeader>
            </HomeDiv>
          </HomeDiv>
      )
    }))
  }

  displayChildren = (children) => {
    return ( children.map( (single, index) => {
      return(
        <HomeDiv
          width={'100%'}
          border={`1px solid ${HomeStyleGuide.color.lightgray}`}
        >
          <HomeDiv
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'25%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
            </HomeDiv>
            <HomeDiv
              width={'75%'}
              flexDirection={'row'}
            >
              <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.SubDepartmentForm(single.id)} />
              <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
            </HomeDiv>
          </HomeDiv>
          { this.props.jobs.length > 0 && this.displayJobs(index) }
          { single.children ? this.displayChildren(single.children) : null }
        </HomeDiv>
      )
    }))
  }

  displaySubdepartments = () => {
    return ( this.props.additionalDepartments.map( (single, index) => {
      return(
        <HomeDiv
          width={'100%'}
          border={`1px solid ${HomeStyleGuide.color.lightgray}`}
        >
          <HomeDiv
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'25%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
            </HomeDiv>
            <HomeDiv
              width={'75%'}
              flexDirection={'row'}
            >
              <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
              <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
            </HomeDiv>
          </HomeDiv>
          { this.props.jobs.length > 0 && this.displayJobs(index) }
          { single.children ? this.displayChildren(single.children) : null }
        </HomeDiv>
      )
    }))
  }

  displayDepartments = (departments) => {
    return ( departments.map( single => {
      return(
        <HomeDiv
            width={'100%'}
          >
            <HomeDiv
              flexDirection={'row'}
              justifyContent={'space-around'}
              borderBottom={this.props.additionalDepartments.length > 0 ? `1px solid ${HomeStyleGuide.color.black}` : null }
              width={'100%'}
            >
              <HomeSectionHeader
                width={'50%'}
              >
                {single.name}
              </HomeSectionHeader>
              <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
              <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
            </HomeDiv>
            {single.children && this.displayDepartments(single.children)}
          </HomeDiv>
      )
    }))
  }


  render() {
    console.log("departments rendered")
    console.log(this.props)
    return(
      <HomeDiv
        margin={'2%'}
        border={`2px solid ${HomeStyleGuide.color.darkblue}`}
      >
        <HomeHeader
          backgroundColor={HomeStyleGuide.color.lightgray}
          borderRadius={'2px 2px 0 0'}
          fontSize={HomeStyleGuide.font.size.mediumLarge}
        >
          Department Information for {this.props.user.name !== null && this.props.user.name !== undefined ? this.props.user.name : this.props.user.email}
        </HomeHeader>
        {this.displayDepartments(this.props.department)}
      </HomeDiv>
    )
  }
}

export default Departments;