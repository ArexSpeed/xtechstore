import React, { useState } from 'react';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerStyled';
import {WaveDown, WaveDownRotate} from '../SectionWave';
import bannerTab from '../../images/xtabbanner.jpeg';

function BannerTab() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (

 <>
<HeroContainer img={bannerTab}>
<WaveDownRotate fill={'#fff'} />
   <HeroContent>
        <HeroH1>Comfort work in travel</HeroH1>
        <HeroP>
        Create awesome things also in travel with powerful XTab.
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

export default BannerTab;