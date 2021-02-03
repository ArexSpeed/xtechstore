import React, { useState, useRef, useEffect } from 'react';
import {Container, Content, H1, P, Ul, Li, PhoneBoxes, PhonesShow, PhoneBox, PhoneImage, PhoneName, SectionDesc, DescDetails, DescImage, DescPhoneName, Table, Tr, Td, Button} from './PhonesStyled';
import {phones} from '../data';
import imgXphoneOne from '../../images/xphone2.jpg';

function SectionPhones() {
  const [hover, setHover] = useState(false);
  const [showPhoneSeries, setShowPhoneSeries] = useState('Pro Series');
  const [activePhoneSeries, setActivePhoneSeries] = useState('');
  const [showPhoneModel, setShowPhoneModel] = useState('Pro 21 Max');
  const [boxClass, setBoxClass] = useState(false);
  const handleShowPhoneSeries = (e) => {
    let seriesName = e.target.textContent;
    setShowPhoneSeries(seriesName);
    //console.log(seriesName.split(' ').slice(0,1));
    let modelName = seriesName.split(' ').slice(0,1);
    setShowPhoneModel(`${modelName} 21`);
  }
  useEffect(
    () => {
      setBoxClass(!boxClass);
    },
    [showPhoneModel],
  );

  const rotateBox = (e) => {
    console.log('hello');
    console.log(e)
    e.target.classList.add('rotate');
     //e.target.style.transform = 'rotateY(360deg)';
     //e.target.style.transition = 'all 0.3s ease-in';
  }
  //with error on image click
  //const handleShowPhoneModelE = (e) => setShowPhoneModel(e.target.lastChild.textContent)
  //Set model to rotate details
  const handleShowPhoneModel = (model) => {
    setShowPhoneModel(model)
    //rotateBox(model)
    
    //setBoxClass(model);
    //console.log(boxClass);


  }

  const showBoxes =  phones
  .filter(phone => phone.series === showPhoneSeries)
  .map((phone, index) =>  (
              <PhoneBox key={index} onClick={() => handleShowPhoneModel(phone.model)}>
                <PhoneImage src={phone.img} />

                <PhoneName>
                  {phone.model}
                </PhoneName>
              </PhoneBox>

      ))

  const showPhoneModelBox =  phones
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
    <Button>
      Go to store
    </Button>
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
        <Li>
          Game Series
        </Li>
        <Li>
          Mini Series
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