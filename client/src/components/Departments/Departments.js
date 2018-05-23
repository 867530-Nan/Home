import React, {Component} from 'react'
import { connect } from 'react-redux'
import { HomeDiv, HomeSectionHeader, HomeHeader, HomeParagraph } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import DepartmentForm from './DepartmentForm'
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { addDepartment } from '../../actions/departments'

import HomeStyleGuide from '../generic/HomeStyleGuide';

class Departments extends Component {

  state = { allDepartments: [], slide: 1, showSingle: true }

  componentDidMount() {
    // this.collapseChildren(this.props.department, 1)
  }

  appendSubDepartment = (single) => {
    this.props.dispatch(addDepartment(single))
  }

  collapseChildren = (departments, level) => {
    return (departments.map( single => {
      let newSingle = {department: single, level: level}
      if (this.state.allDepartments.includes(newSingle)) {
        return 
      } else {
        this.state.allDepartments.push(newSingle)
      }
      if (single.children) {
        this.collapseChildren(single.children, level+1)
      }
    }))
  }

  showSingle = () => {
    return(
      <Table.Row>
        <Table.Cell style={{width: '50%', textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.small}`}}>{this.state.allDepartments[0].department.name}</Table.Cell>
        <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
          <RaisedButton label="Add Sub Departments" backgroundColor="#FFE0B2" style={{margin: '12px'}} onClick={() => this.setState({visibleID: this.state.allDepartments[0].department.id, slide: 2})} />
          <br/>
          <RaisedButton label="View / Add Jobs" backgroundColor="#FFCCBC" style={{margin: '12px'}} onClick={() => this.props.jobsForm(this.state.allDepartments[0].department.id, this.state.allDepartments[0].department.name)} />
        </Table.Cell>
      </Table.Row>
    )
  }

  showAllDepts = () => {
    this.state.allDepartments.sort(function(a, b) {
      return a.level > b.level
    })
    return(
      this.state.allDepartments.map( single => {
        return(
          <Table.Row>
            <Table.Cell style={{width: '50%', textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.small}`}}>{single.department.name}</Table.Cell>
            <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
              <RaisedButton label="Add Sub Departments" backgroundColor="#FFE0B2" style={{margin: '12px'}} onClick={() => this.setState({visibleID: single.department.id, slide: 2})} />
              <br/>
              <RaisedButton label="View / Add Jobs" backgroundColor="#FFCCBC" style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.department.id, single.department.name)} />
            </Table.Cell>
          </Table.Row>
          )  
      })
    )
  }

  displayDepartments = (departments, level, second) => {
    
    if (this.state.allDepartments.length > 0) {
      return (
      <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable singleLine> 
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.mediumSmall}`}}>Department Name</Table.HeaderCell>
            <Table.HeaderCell style={{textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.mediumSmall}`}}>Department Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.state.showSingle ? this.showSingle() : this.showAllDepts() }                
        </Table.Body>
        </Table>
    )} else {
      return(
        <div/>
      )
    }
  }

  showDepartmentsButton = () => {
    return(
      <HomeDiv
        onClick={() => this.setState({ showSingle: !this.state.showSingle })}
        height={'50px'}
        width={'50%'}
        boxShadow={`0px 1px 5px 1px ${HomeStyleGuide.color.lightgray}`}
        backgroundColor={HomeStyleGuide.color.featherOrange}
        borderRadius={'2px'}
        hoverBackgroundColor={HomeStyleGuide.color.white}
        hoverColor={HomeStyleGuide.color.black}
        cursor={'pointer'}
        >
          <HomeParagraph
            width={'100%'}
            textAlign={'center'}
            color={HomeStyleGuide.color.white}
          >
            {this.state.showSingle ? "Show All Departments" : "Hide Sub Departments"}
          </HomeParagraph>
      </HomeDiv>
    )
  }


  render() {
    { this.props.department && this.state.allDepartments.length === 0 ? this.collapseChildren(this.props.department) : null }
    if (this.state.slide === 1){
      return(
      <HomeDiv
        margin={'3% 0'}
      >
        <HomeHeader
          backgroundColor={HomeStyleGuide.color.lightgray}
          borderRadius={'2px 2px 0 0'}
          fontSize={HomeStyleGuide.font.size.medium}
        >
          Departments
        </HomeHeader>
        {this.displayDepartments(this.props.department, 1)}
        { this.props.department.length > 0 && this.props.department[0].children && this.showDepartmentsButton() }  
      </HomeDiv>
    )} else if (this.state.slide === 2) {
      return(
        <DepartmentForm 
          back={this.back} 
          appendSubDepartment={this.appendSubDepartment} 
          departmentID={this.state.visibleID} 
        />
      )
    }
  }
}

const mapStateToProps = state => {
  return(
    state
  )
}

export default connect()(Departments);