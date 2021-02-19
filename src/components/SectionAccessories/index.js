import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Content, H1, P, AccessoriesSection, AccessoriesBox, AccessoriesName, AccessoriesImg} from './AccessoriesStyled';
import {accessories} from '../data';
import './grid.css';

function SectionAccessories() {

  const showAccessories = accessories.map((accessory, index) => (
    <AccessoriesBox index={index} className={`gridarea-${index}`}>
          <AccessoriesName>
                {accessory.model}
          </AccessoriesName>
          <Link to={`/product/${accessory.id}`} style={{display: 'flex', justifyContent: 'center'}}>
            <AccessoriesImg src={accessory.img}/>
          </Link>
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