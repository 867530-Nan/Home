import React, { Component } from 'react';

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeHeader, HomeSectionHeader, HomeDiv, HomeParagraph, media } from '../generic/GenericStyledComponents';
import './table.css'

const object = [
  {
    name: 'toilet paper',
    price: 2.99
  },
  {
    name: 'newspaper',
    price: 12.52
  },
  {
    name: 'lightbulbs',
    price: 45
  },
  {
    name: 'pillow cases',
    price: 12.43
  }
]



class Table extends Component {

  displayName = () => {
    return object.map(item => {
      console.log(item)
      return(
        <td>{item.name}</td>
      )
    })
  }

  displayNumbers = () => {
    return object.map(item => {
      return(
        <td>{item.price}</td>
      )
    })
  }

  render() {
    return(
      <HomeDiv
        height={'100vh'}
        backgroundColor={HomeStyleGuide.color.darkgreen}
      >
        <table>
          <tr>
            <td>&nbsp;</td>
            <th>Knocky</th>
            <th>Flor</th>
            <th>Ella</th>
            <th>Juan</th>
          </tr>
          <tr>
            <th>Items</th>
            {this.displayName()}
          </tr>
          <tr className="one">
            <th>Price</th>
            {this.displayNumbers()}
          </tr>
          <tr>
            <th>Owner</th>
            <td>Mother-in-law</td>
            <td>Me</td>
            <td>Me</td>
            <td>Sister-in-law</td>
          </tr>
          <tr>
            <th>Eating Habits</th>
            <td>Eats everyone's leftovers</td>
            <td>Nibbles at food</td>
            <td>Hearty eater</td>
            <td>Will eat till he explodes</td>
          </tr>
        </table>
        <table>
          <colgroup>
            <col/>
            <col className="yellow"/>
          </colgroup>
          <tr>
            <th>Data 1</th>
            <th>Data 2</th>
          </tr>
          <tr>
            <td>Calcutta</td>
            <td>Orange</td>
          </tr>
          <tr>
            <td>Robots</td>
            <td>Jazz</td>
          </tr>
        </table>
      </HomeDiv>
    );
  }
}

export default Table;
