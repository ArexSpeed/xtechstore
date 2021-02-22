import styled, { keyframes } from 'styled-components';
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
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  margin-bottom: 300px;
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
  margin: 24px auto;
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
export const AccessoriesSection = styled.section`
  display: grid;
  max-width: 90vh;
  grid-template-columns: 1fr 0.7fr 1.3fr;
  grid-template-rows: 1fr 0.5fr 1.5fr;
  gap: 5px 5px;
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  }

`

export const AccessoriesImg = styled.img`
  max-width: 80%;
  transition: all 0.5s ease-in;
`

export const AccessoriesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.index%2 ? style.primaryColor : style.secondaryColor};
  //box-shadow: 0 0 5px rgba(0,0,0,.5);
  border-radius: 10px;
  &:hover ${AccessoriesImg}{
    transform: scale(1.2);
  }

`
export const AccessoriesName = styled.h4`
  font-size: 20px;
`


