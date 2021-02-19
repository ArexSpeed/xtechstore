import styled, { keyframes } from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
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
export const TabletsSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
export const TabletButton = styled.button`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 30px;
  border-radius: 20px;
  border: none;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  background: ${props => props.cardNo === 0 || props.cardNo === 2 ? style.primaryColor : style.secondaryColor};
  color: ${props => props.cardNo === 0 || props.cardNo === 2 ? 'black' : 'white'};
  transition: all 0.35s ease-in-out;
`

export const TabletCard = styled.div`
  width: 33%;
  height: 500px;
  padding: 20px 0;
  background: ${props => props.cardNo === 0 || props.cardNo === 2 ? 'white' : 'black'};
  color: ${props => props.cardNo === 0 || props.cardNo === 2 ? 'black' : 'white'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.35s ease-in-out;
  &:hover{
    transform: scale(1.2);
    transition: all 0.35s ease-in-out;
    z-index: 3;
  }
  &:hover ${TabletButton}{
    display: block;
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
`
export const TabletImg = styled.img`
  max-width: 80%;
  max-height: 70%;
`
export const TabletTitle = styled.h3`
  font-size: 30px;
`

export const TabletDesc = styled.h5`
  font-size: 20px;
`

export const TabletDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.cardNo === 0 || props.cardNo === 2 ? 'black' : 'white'};
`
export const BookHoverTitle = styled.h3`
    text-align: center;
  padding-top: 5px;
  background: ${props => props.cardNo === 0 || props.cardNo === 2 ? style.primaryColor : style.secondaryColor};
  color: ${props => props.cardNo === 0 || props.cardNo === 2 ? 'black' : 'white'};
  border-radius: 0 0 5px 5px;
  top: 0;
  width: 70%;
  font-size: 30px;
`



