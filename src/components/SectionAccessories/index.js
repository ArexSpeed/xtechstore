import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Content, H1, P, AccessoriesSection, AccessoriesBox, AccessoriesName, AccessoriesImg} from './AccessoriesStyled';
import {WaveDown, WaveDownRotate} from '../SectionWave';
import {products} from '../data';
import './grid.css';

function SectionAccessories() {

  const showAccessories = products.filter(product => product.device === 'Accessory')
  .map((accessory, index) => (
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
      <WaveDown fill="#000" />
      </Container>

</>

  )
}

export default SectionAccessories;