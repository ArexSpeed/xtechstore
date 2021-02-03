import React, { useState, useEffect, useRef } from 'react';
import {Container, Content, H1, P, AccessoriesSection, AccessoriesBox, AccessoriesName, AccessoriesImg } from './AccessoriesStyled';
import xtabpro from '../../images/xtabpro.jpg'
import {accessories} from '../data';
import './grid.css';

function SectionAccessories() {
  const [hover, setHover] = useState(false);
  const [displayBookCardHover, setDisplayBookCardHover] = useState(-1);

  const gridAreas = [
    "1 / 3 / 2 / 4", "1 / 2 / 3 / 3", "1 / 1 / 2 / 2", "2 / 1 / 4 / 2", "3 / 2 / 4 / 3", "2 / 3 / 3 / 4", "3 / 3 / 4 / 4"
  ]
  //style={{gridArea: gridAreas[index]}}

  const showAccessories = accessories.map((accessory, index) => (
    <AccessoriesBox index={index} className={`gridarea-${index}`}>
          <AccessoriesName>
                {accessory.name}
          </AccessoriesName>
          <AccessoriesImg src={accessory.img}/>
        </AccessoriesBox>
  ))
  return (

 <>
<Container id='accessories'>
   <Content>
        <H1>Amazing tools for your devices.</H1>
        <P>
          Increase your tech power.
        </P>
      <AccessoriesSection>
        {showAccessories}
       
      </AccessoriesSection>
      
      </Content>
      </Container>

</>

  )
}

export default SectionAccessories;