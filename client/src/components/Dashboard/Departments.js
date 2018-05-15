import React, {Component} from 'react'
import { HomeDiv, HomeSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';

class Departments extends Component {

  displayChildren = (children) => {
    return ( children.map( (single, index) => {
      return(
        <HomeDiv
          width={'100%'}
          border={`1px solid ${HomeStyleGuide.color.lightgray}`}
          padding={'0 0 2% 0'}
          className="Child"
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
          padding={'0 0 2% 0'}
          className="subDepartment"
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

  displayDepartments = (departments, first) => {
    return ( departments.map( single => {
      return(
        <HomeDiv
            width={'100%'}
            className="department"
            padding={first === 1 ? '0' : '0 0 2% 0'}
            margin={first === 1 ? '0' : '0 0 2% 0'}
            backgroundColor={ first === 1 ? 'null' : HomeStyleGuide.color.lightgray}
          >
            <HomeDiv
              flexDirection={'row'}
              justifyContent={ first === 1 ? 'space-between' : 'space-around'}
              borderBottom={this.props.additionalDepartments.length > 0 ? `1px solid ${HomeStyleGuide.color.black}` : null }
              width={'100%'}
            >
              <HomeDiv
                flexDirection={'row'}
                width={first === 1 ? 'auto' : '50%'}
              >
                <HomeSectionHeader
                  
                >
                  {single.name}
                </HomeSectionHeader>
              </HomeDiv>
              <HomeDiv
                width={first === 1 ? 'auto' : '50%'}
                flexDirection={'row'}
              >
                <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
                <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
              </HomeDiv>
            </HomeDiv>
            {single.children && this.displayDepartments(single.children, 0)}
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
        {this.displayDepartments(this.props.department, 1)}
      </HomeDiv>
    )
  }
}

export default Departments;