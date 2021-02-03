import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import * as style from '../StyleVariables';

export const HeroContainer = styled.div`
  background: url(${props => props.img ? props.img : 'https://blog.daraz.com.bd/wp-content/uploads/2019/10/iphone-11-banner.png'});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: stretch;
  //padding: 0 30px;
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
  @media screen and (max-width: 768px){
    background-size: cover;
    background-position: center;
  }

`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const HeroP = styled.p`
  margin-top: 24px;
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

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-right: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-right: 8px;
  font-size: 20px;
`
