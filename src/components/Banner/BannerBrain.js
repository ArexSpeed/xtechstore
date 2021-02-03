import React, { useState } from 'react';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerStyled';
import {WaveDown, WaveUp, WaveUpRotate} from '../SectionWave';
import banner2 from '../../images/banner2.jpeg';

function BannerBrain() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (

 <>
<HeroContainer img={banner2}>
<WaveUp fill={'#fff'} />
   <HeroContent>
        <HeroH1>Faster and smarter than anything</HeroH1>
        <HeroP>
          Improve your work abilities with the fastest CPU XBrain.
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

export default BannerBrain;