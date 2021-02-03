import React, { useState, useRef } from 'react';
import {Container, Content, H1, P, WatchContainer, WatchDetails, WatchImage, WatchName, WatchDesc, WatchP} from './WatchesStyled';

import imgXphoneOne from '../../images/xphone2.jpg';
import {watches} from '../data';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import './style.css';

function SectionWatches() {

  const [watchModel, setWatchModel] = useState();

  const handleWatchDetails = (model) => {
    setWatchModel(model)
  }
  const showWatchDetails = watches
  .filter(watch => watch.name === watchModel)
  .map((watch,index) => (
    <WatchContainer key={index}>
    <WatchImage  />
    <WatchDetails>
    <WatchName>{watch.name}</WatchName>
    <WatchDesc>{watch.desc}</WatchDesc>
      <WatchP>Battery: {watch.battery}</WatchP>
      <WatchP>storage: {watch.storage}</WatchP>
      <WatchP>size: {watch.size}</WatchP>
      <WatchP>Gps: {watch.gps ? <span>&#10003;</span> : 	<span>&times;</span>}</WatchP>
      <WatchP>Health Care: {watch.healthcare ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Fitness Tracker: {watch.fitness}</WatchP>
      <WatchP>Esim: {watch.esim ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Water Proof: {watch.water ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Price: {watch.price}</WatchP>
      
    </WatchDetails>
    </WatchContainer>
  ))

  
  return (

 <p>
<Container id='watches'>
   <Content>
        <H1>Smartphones for everyone</H1>
        <P>
          Check our smartphones from budget level if you need basic usage to most advanced devices in the market
        </P>
        <StyleRoot>
        <Coverflow width="1000" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
    media={{
      '@media (min-width: 1000px)': {
        width: '1000px',
        height: '500px'
      },
      '@media (max-width: 1000px)': {
        width: '700px',
        height: '300px'
      },
      '@media (max-width: 700px)': {
        width: '400px',
        height: '300px'
      }
    }}
  >

    <img src={imgXphoneOne} alt='XWatch Gold' onClick={() => handleWatchDetails('XWatch Gold')}/>
    <img src={imgXphoneOne} alt='XWatch Pro' onClick={() => handleWatchDetails('XWatch Pro')}/>
    <img src={imgXphoneOne} alt='XWatch Lite' onClick={() => handleWatchDetails('XWatch Lite')}/>
    <img src={imgXphoneOne} alt='XBand Pro' onClick={() => handleWatchDetails('XBand Pro')} />
    <img src={imgXphoneOne} alt='XBand Lite' onClick={() => handleWatchDetails('XBand Lite')} />
  </Coverflow>
  </StyleRoot>
  {showWatchDetails}
      </Content>
      </Container>

</p>

  )
}

export default SectionWatches;