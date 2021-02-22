import React from 'react';
import {HeroContainer,HeroContent, HeroH1, HeroP} from './BannerStyled';
import {WaveUp,WaveDown,WaveUpRotate, WaveDownRotate} from '../SectionWave';
import banner from '../../images/banner5.jpg';

function BannerAccesories() {

  return (

 <>
<HeroContainer img={banner}>
<WaveDownRotate fill={'#fff'} />
   <HeroContent>
        <HeroH1>Feel more</HeroH1>
        <HeroP>
          Add accessories to your devices
        </HeroP>
      </HeroContent>
      <WaveUpRotate fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default BannerAccesories;