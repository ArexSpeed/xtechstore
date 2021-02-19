import styled from 'styled-components';
import * as style from '../StyleVariables';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;

`


export const Content = styled.div`
  z-index: 3;
  max-width: 90%;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H1 = styled.h1`
  color: #000;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const P = styled.p`
  margin-top: 24px;
  color: #000;
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
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  color: #000;
`
export const Li = styled.li`
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  position: relative;
  &::before{
    position: absolute;
    content: '';
    bottom: 0; 
    left: 0;
    width: 0;
    height: 0;
    transition: all 0.35s ease-in-out;
  }
  &:hover::before{
    width: 100%;
    height: 2px;
    background: ${style.secondaryColor};
  }
  &:hover{
    color: ${style.secondaryColor};
  }
  &.active{
    color: ${style.secondaryColor};
    border-bottom: 2px solid ${style.secondaryColor};
  }
  @media screen and (max-width: 768px){
    font-size: 15px;
    padding: 5px 5px;
  }

`
export const PhonesShow = styled.div`
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`
export const PhoneBoxes = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  @media screen and (max-width: 768px){
    //position: relative;
    flex-direction: row;
    width: 100vw;
    overflow-x: scroll;
  }

`
// PHONE BOX
export const PhoneName = styled.h4`
position: absolute;
text-align: center;
padding-top: 5px;
background: ${style.primaryColor};
border-radius: 5px 5px 0 0;
bottom: 0;
width: 70%;
font-size: 15px;
`
export const PhoneBox = styled.div`
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: -2px -2px 5px rgba(0,0,0,.1),
                3px 3px 5px rgba(0,0,0,.1);
  position: relative;
  cursor: pointer;
  &::before{
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    border-radius: inherit;
    transform: translate(-50%,-50%);
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }
  &:hover::before{
    width: 100%;
    height: 100%;
    background: ${style.primaryColor};
  }
  &:hover ${PhoneName}{
    background: ${style.secondaryColor};
    color: #fff;
    transition: all 0.2s;
    transition-delay: 0.4s;
  }
`
export const PhoneImage = styled.img`
  height: 180px;
`
// DESC SECTION
export const SectionDesc = styled.section`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const DescImage = styled.img`
  height: 500px;
  margin: auto 30px;
`
// DESC PHONE
export const DescDetails = styled.div`
  border-radius: 20px;
  height: 500px;
  width: 300px;
  background: linear-gradient(60deg, black, ${style.secondaryColor});
  box-shadow: inset -3px 3px 20px ${style.secondaryColorShadow},
            inset -5px 5px 20px ${style.primaryColorShadow},
            inset 5px -5px 20px black;
  display: flex;
  justify-content: space-between;
  align-items:  center;
  flex-direction: column;
  position: relative;
 

  &.rotate{
    transform: rotateY(360deg);
    transition: all 1s ease-in;
  }
  &.rotate2{
    transform: rotateY(0deg);
    transition: all 1s ease-in;
  }
`
export const DescPhoneName = styled.div`  
  text-align: center;
  padding-top: 5px;
  background: ${style.primaryColor};
  border-radius: 0 0 5px 5px;
  top: 0;
  width: 70%;
  font-size: 20px;
`
export const Table = styled.table`
display: flex;
flex-direction: column;
align-items: center;
  width: 90%;
`
export const Tr = styled.tr`
  width: auto;
  border-bottom: 2px solid ${style.primaryColor};
  display: flex;
  flex-direction: row;
  margin: 5px; 
`
export const Td = styled.td`
  color: #fff;
  font-size: 16px;
`
export const Button = styled.button`
  border-radius: 50px;
  padding: 10px 40px;
  margin: 10px;
  border: 2px groove ${style.primaryColor};
  background: transparent;
  color: ${style.primaryColor};
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  &:before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${style.primaryColor};
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
  }
  &:hover::before{
    width: 100%;
  }
  &:hover{
    color: ${style.secondaryColor}
  }
`


