import React, { useState } from 'react';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerStyled';
import {WaveUp,WaveDown,WaveUpRotate, WaveDownRotate} from '../SectionWave';
import banner from '../../images/accbanner.jpg';

function BannerAccesories() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (

 <>
<HeroContainer img={banner}>
<WaveDownRotate fill={'#fff'} />
   <HeroContent>
        <HeroH1>Feel more</HeroH1>
        <HeroP>
          Add accessories to your devices
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <WaveUpRotate fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default BannerAccesories;