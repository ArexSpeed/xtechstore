import React from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP} from './BannerStyled';
import {WaveDown} from '../SectionWave';
import banner from '../../images/banner1.jpg';


function Banner() {
  
  return (

 <>
<HeroContainer id='home' img={banner}>
   <HeroContent>
        <HeroH1>New Tech Close To You</HeroH1>
        <HeroP>
          Modern. Faster. Better.
        </HeroP>


      </HeroContent>
<WaveDown fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default Banner;