import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Content, H1, P, TabletsSection, TabletCard, TabletImg, TabletTitle,TabletDesc,  TabletDetails, TabletButton } from './TabletsStyled';
import {products} from '../data';
import AOS from 'aos';
import "aos/dist/aos.css";
function SectionTablets() {
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

  const showTablet = products.filter(product => product.device === 'Tablet')
  .filter(tablet => tablet.id === 30 || tablet.id === 33 || tablet.id === 36)
  .map((tablet, index) => (
    <TabletCard cardNo={index} key={index}>
          <TabletImg src={tablet.img} />
          <TabletDesc>
                <TabletTitle>{tablet.model}</TabletTitle>
                <TabletDetails cardNo={index}>{tablet.ram}/ {tablet.storage} Storage / {tablet.size} inch</TabletDetails>
          </TabletDesc>
          <Link to={`/product/${tablet.id}`}>
          <TabletButton>
            Check More
          </TabletButton>
          </Link>
        </TabletCard>
  ))


  return (

 <>
  <Container id='tablets'>
    <Content>
          <H1>Comfort work even in travel.</H1>
          <P>
            Create awesome things also in travel with powerful XTab.
          </P>
        <TabletsSection>
          {showTablet} 
        
        </TabletsSection>
        
      </Content>
  </Container>

</>

  )
}

export default SectionTablets;