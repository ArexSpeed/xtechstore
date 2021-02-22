import React from 'react';
import {HeroContainer,HeroContent, HeroH1, HeroP} from './BannerStyled';
import {WaveDown, WaveDownRotate} from '../SectionWave';
import banner from '../../images/banner4.jpeg';

function BannerTab() {

  return (

 <>
<HeroContainer img={banner}>
<WaveDownRotate fill={'#fff'} />
   <HeroContent>
        <HeroH1>Comfort work in travel</HeroH1>
        <HeroP>
        Create awesome things also in travel with powerful XTab.

        </HeroP>


      </HeroContent>
      <WaveDown fill={'#fff'} />
      </HeroContainer>

</>

  )
}

export default BannerTab;