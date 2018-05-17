import React, {Component} from 'react'
import { HomeDiv, HomeSectionHeader, HomeHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Icon, Label, Menu, Table } from 'semantic-ui-react'

import HomeStyleGuide from '../generic/HomeStyleGuide';

let allDepartments = []
// comment for clas
class Departments extends Component {

  // displayDepartments = (departments, first) => {
    // return( departments.map( single => {
    //   return(
    //       <Table.Row>
    //         <Table.Cell>{single.name}</Table.Cell>
    //         <Table.Cell style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} singleLine={true}>
    //           <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
    //           <br/>
    //           <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
    //         </Table.Cell>
    //       </Table.Row>
    //   )
  //     {single.children && this.displayChildren(single.children, 0)}
  //   }))
  // }

  collapseChildren = departments => {
    return (departments.map( single => {
      allDepartments.push(single)
      if (single.children) {
        this.collapseChildren(single.children)
      }
    }))
  }

  displayDepartments = (departments, first, second) => {
    this.collapseChildren(departments)
    return (
    <Table celled color={`${HomeStyleGuide.color.lightgreen}`} selectable singleLine> 
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell style={{textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.mediumSmall}`}}>Department Name</Table.HeaderCell>
          <Table.HeaderCell style={{textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.mediumSmall}`}}>Department Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      { allDepartments.map( single => {
        return(
        <Table.Row>
          <Table.Cell style={{width: '50%', textAlign: 'center', fontSize: `${HomeStyleGuide.font.size.small}`}}>{single.name}</Table.Cell>
          <Table.Cell style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} singleLine={true}>
            <RaisedButton label="Add Sub Departments" backgroundColor="#FFE0B2" style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
            <br/>
            <RaisedButton label="View / Add Jobs" backgroundColor="#FFCCBC" style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
          </Table.Cell>
        </Table.Row>
        )
      })}
      </Table.Body>
      </Table>
  )}


  render() {
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
      </HomeDiv>
    )
  }
}

export default Departments;