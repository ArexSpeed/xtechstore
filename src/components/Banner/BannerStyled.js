import styled from 'styled-components';
import * as style from '../StyleVariables';

export const HeroContainer = styled.div`
  background: url(${props => props.img ? props.img : ''});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: 80vh;
  position: relative;
  &::before{
    position: absolute;
    content: '';
    background: #000;
    top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  }

`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 400px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: ${style.primaryColor};
  font-size: 48px;
  text-align: center;
  text-shadow: 0 0 10px ${style.secondaryColorShadow};
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const HeroP = styled.p`
  margin-top: 24px;
  margin-bottom: 200px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`


