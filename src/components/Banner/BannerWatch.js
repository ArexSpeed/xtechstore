import React  from 'react';
import {HeroContainer,HeroContent, HeroH1, HeroP} from './BannerStyled';
import {WaveDown, WaveUp, WaveUpRotate} from '../SectionWave';
import banner from '../../images/banner3.jpg';

function BannerWatch() {

  return (

 <>
<HeroContainer img={banner}>
<WaveUp fill={'#fff'} />
   <HeroContent>
        <HeroH1>Improve fitness level</HeroH1>
        <HeroP>
        Stay connected wherever you are.
        </HeroP>


      </HeroContent>
      <WaveDown fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default BannerWatch;