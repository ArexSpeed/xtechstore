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
export const WatchContainer = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
  flex-direction: column;
}

`
export const WatchImage = styled.img`
  width: 400px;
  height: 400px;
  background: 'yellow';
  margin: 0 20px;
`
export const WatchDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 40vw;
@media screen and (max-width: 768px){
  min-width: 90vw;
}
`
export const WatchName = styled.h3`
  font-size: 25px;
`
export const WatchDesc = styled.p`
  font-size: 16px;
  color: #555;
  text-align: justify;
`
export const WatchP = styled.p`
  font-size: 16px;
  padding: 3px 10px;
`
export const WatchButton = styled.button`
  border-radius: 50px;
  padding: 10px 40px;
  margin: 10px;
  border: 2px groove ${style.primaryColor};
  background: ${style.secondaryColor};
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