import React, { useState } from 'react';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerStyled';
import {WaveDown, WaveUp, WaveUpRotate} from '../SectionWave';
import banner from '../../images/watchbanner.jpg';

function BannerWatch() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (

 <>
<HeroContainer img={banner}>
<WaveUp fill={'#fff'} />
   <HeroContent>
        <HeroH1>Improve fitness level</HeroH1>
        <HeroP>
        Stay connected wherever you are.
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
      <WaveDown fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default BannerWatch;