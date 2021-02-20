import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Container, Content, H1, P, Ul, Li, PhoneBoxes, PhonesShow, PhoneBox, PhoneImage, PhoneName, SectionDesc, DescDetails, DescImage, DescPhoneName, Table, Tr, Td, Button} from './PhonesStyled';
import {products} from '../data';

function SectionPhones() {
  const [showPhoneSeries, setShowPhoneSeries] = useState('Pro Series');
  const [showPhoneModel, setShowPhoneModel] = useState('Pro 21 Max');
  const [boxClass, setBoxClass] = useState(false);
  const handleShowPhoneSeries = (e) => {
    let seriesName = e.target.textContent;
    setShowPhoneSeries(seriesName);
    console.log(seriesName.split(' ').slice(0,1));
    let modelName = seriesName.split(' ').slice(0,1);

    if(modelName[0] === 'Game') modelName[0] = 'G'
    setShowPhoneModel(`${modelName} 21`);
  }
  useEffect(
    () => {
      setBoxClass(!boxClass);
    },
    [showPhoneModel],
  );


  //with error on image click
  //const handleShowPhoneModelE = (e) => setShowPhoneModel(e.target.lastChild.textContent)
  //Set model to rotate details
  const handleShowPhoneModel = (model) => {
    setShowPhoneModel(model)
  }

  const showBoxes =  products.filter(product => product.device === 'Phone')
  .filter(phone => phone.series === showPhoneSeries)
  .map((phone, index) =>  (
              <PhoneBox key={index} onClick={() => handleShowPhoneModel(phone.model)}>
                <PhoneImage src={phone.img} />

                <PhoneName>
                  {phone.model}
                </PhoneName>
              </PhoneBox>

      ))

  const showPhoneModelBox =  products.filter(product => product.device === 'Phone')
  .filter(phone => phone.model === showPhoneModel)
  .map((phone, index) => (
    <>
    <DescImage src={phone.img} />
    <DescDetails 
     className={boxClass ? 'rotate' : 'rotate2'}
    >
    <DescPhoneName>{phone.model}</DescPhoneName>
    <Table>
      <Tr>
        <Td>CPU:</Td>
        <Td>{phone.cpu}</Td>
      </Tr>

      <Tr>
        <Td>RAM:</Td>
        <Td>{phone.ram}</Td>
      </Tr>

      <Tr>
        <Td>Storage:</Td>
        <Td>{phone.storage}</Td>
      </Tr>
      <Tr>
        <Td>Camera:</Td>
        <Td>{phone.camera}</Td>
      </Tr>
      <Tr>
        <Td>Size:</Td>
        <Td>{phone.size}</Td>
      </Tr>
      <Tr>
        <Td>Battery:</Td>
        <Td>{phone.battery}</Td>
      </Tr>
      <Tr>
        <Td>Price:</Td>
        <Td>{phone.price}</Td>
      </Tr>
    </Table>
    <Link to={`/product/${phone.id}`}>
    <Button>
      Go to product
    </Button>
    </Link>
    </DescDetails>
    </>
  ))
  
  return (

 <>
<Container id='phones'>
   <Content>
        <H1>Smartphones for everyone</H1>
        <P>
          Check our smartphones from budget level if you need basic usage to most advanced devices in the market
        </P>
      <Ul>
        <Li onClick={handleShowPhoneSeries} className={showPhoneSeries=== 'Pro Series' ? 'active' : ''}>
          Pro Series
        </Li>
        <Li onClick={handleShowPhoneSeries} className={showPhoneSeries=== 'A Series' ? 'active' : ''}>
          A Series
        </Li>
        <Li onClick={handleShowPhoneSeries} className={showPhoneSeries=== 'Game Series' ? 'active' : ''}>
          Game Series
        </Li>
        <Li onClick={handleShowPhoneSeries} className={showPhoneSeries=== 'Lite Series' ? 'active' : ''}>
          Lite Series
        </Li>
      </Ul>
      <PhonesShow>
        <PhoneBoxes>
        {showBoxes}
        </PhoneBoxes>
        
      <SectionDesc>
      {showPhoneModelBox}
              
      </SectionDesc>
      </PhonesShow>
      </Content>
      </Container>

</>

  )
}

export default SectionPhones;