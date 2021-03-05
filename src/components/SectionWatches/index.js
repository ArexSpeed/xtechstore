import React, { useState} from 'react';
import {Container, Content, H1, P, WatchContainer, WatchDetails, WatchImage, WatchName, WatchDesc, WatchP, WatchButton} from './WatchesStyled';
import {Link} from 'react-router-dom';
import {products} from '../data';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

function SectionWatches() {

  const [watchModel, setWatchModel] = useState();

  const handleWatchDetails = (model) => {
    setWatchModel(model)
  }


  const showWatchDetails = products.filter(product => product.device === 'Watch')
  .filter(watch => watch.model === watchModel)
  .map((watch,index) => (
    <WatchContainer key={index}>
    <WatchImage src={watch.img}  />
    <WatchDetails>
    <WatchName>{watch.model}</WatchName>
    <WatchDesc>{watch.description}</WatchDesc>
      <WatchP>Battery: {watch.battery}</WatchP>
      <WatchP>storage: {watch.storage}</WatchP>
      <WatchP>size: {watch.size}</WatchP>
      <WatchP>Fitness Tracker: {watch.fitness} sports</WatchP>
      <WatchP>Gps: {watch.addons.gps ? <span>&#10003;</span> : 	<span>&times;</span>}</WatchP>
      <WatchP>Health Care: {watch.addons.healthcare ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>WiFi: {watch.addons.wifi ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Esim: {watch.addons.esim ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Waterproof: {watch.addons.waterproof ? <span>&#10003;</span> : <span>&times;</span>}</WatchP>
      <WatchP>Price: {watch.price}</WatchP>
      <Link to={`/product/${watch.id}`}>
        <WatchButton>Check</WatchButton>
      </Link>
      
    </WatchDetails>
    </WatchContainer>
  ))

  
  return (
    <p>
      <Container id="watches">
        <Content>
          <H1>Smartwatches for everyone</H1>
          <P>
            Your favorite watches and bands for every sports and situations.
          </P>
          <StyleRoot>
            <Coverflow
              width="1000"
              height="500"
              displayQuantityOfSide={2}
              navigation={false}
              enableScroll={true}
              clickable={true}
              active={0}
              media={{
                "@media (min-width: 1000px)": {
                  width: "1000px",
                  height: "500px",
                },
                "@media (max-width: 1000px)": {
                  width: "700px",
                  height: "300px",
                },
                "@media (max-width: 700px)": {
                  width: "400px",
                  height: "300px",
                },
              }}
            >
              <img
                src={products[24].img}
                alt="XWatch Gold"
                onClick={() => handleWatchDetails("XWatch Gold")}
              />
              <img
                src={products[25].img}
                alt="XWatch Pro"
                onClick={() => handleWatchDetails("XWatch Pro")}
              />
              <img
                src={products[26].img}
                alt="XWatch Lite"
                onClick={() => handleWatchDetails("XWatch Lite")}
              />
              <img
                src={products[27].img}
                alt="XBand Pro"
                onClick={() => handleWatchDetails("XBand Pro")}
              />
              <img
                src={products[28].img}
                alt="XBand Lite"
                onClick={() => handleWatchDetails("XBand Lite")}
              />
            </Coverflow>
          </StyleRoot>
          {showWatchDetails}
        </Content>
      </Container>
    </p>
  );
}

export default SectionWatches;