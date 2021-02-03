import React, { useState } from 'react';
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerStyled';
import {WaveDown} from '../SectionWave';

function Banner() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (

 <>
<HeroContainer id='home'>
   <HeroContent>
        <HeroH1>New Tech Close To You</HeroH1>
        <HeroP>
          Modern. Faster. Better.
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

export default Banner;