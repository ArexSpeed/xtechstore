import React, { useState, useEffect, useRef } from 'react';
import {Container, Content, H1, P, TabletsSection, TabletCard, TabletImg, TabletTitle,TabletDesc,  TabletDetails, TabletButton } from './TabletsStyled';
import {WaveUp, WaveDown} from '../SectionWave';
import xtabpro from '../../images/xtabpro.jpg'
import {xbooks} from '../data';
import AOS from 'aos';
import "aos/dist/aos.css";
function SectionTablets() {
  const [hover, setHover] = useState(false);
  const [displayBookCardHover, setDisplayBookCardHover] = useState(-1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);



  //Show and hide card on specific index to hover only chosen
  const showCardHover = (index) => {
    setDisplayBookCardHover(index);
  }
  const hideCardHover = () => {
    setDisplayBookCardHover(-1);
  }


  return (

 <>
<Container id='tablets'>
   <Content>
        <H1>Comfort work even in travel.</H1>
        <P>
          Create awesome things also in travel with powerful XTab.
        </P>
      <TabletsSection>
        <TabletCard cardNo={0}>
          <TabletImg src={xtabpro}></TabletImg>
          <TabletDesc>
                <TabletTitle>XTab Pro</TabletTitle>
                <TabletDetails cardNo={0}>16GB RAM/ 512GB Storage / 15 inch</TabletDetails>
          </TabletDesc>
          <TabletButton>
            Check More
          </TabletButton>
        </TabletCard>

        <TabletCard cardNo={1}>
          <TabletImg src={xtabpro}></TabletImg>
          <TabletDesc>
                <TabletTitle>XTab </TabletTitle>
                <TabletDetails cardNo={1}>16GB RAM/ 256GB Storage / 13 inch</TabletDetails>
          </TabletDesc>
          <TabletButton>
            Check More
          </TabletButton>
        </TabletCard>

        <TabletCard cardNo={2}>
          <TabletImg src={xtabpro}></TabletImg>
          <TabletDesc>
                <TabletTitle>XTab Lite</TabletTitle>
                <TabletDetails cardNo={2}>8GB RAM/ 128GB Storage / 10 inch</TabletDetails>
          </TabletDesc>
          <TabletButton>
            Check More
          </TabletButton>
        </TabletCard>
       
       
      </TabletsSection>
      
      </Content>
      </Container>

</>

  )
}

export default SectionTablets;