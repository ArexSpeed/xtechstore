import styled from "styled-components";
import * as style from "../StyleVariables";

export const ProductContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px){
    flex-direction: column;
    height: auto;
  }
`;

export const ProductContainerImage = styled.div`
   flex: 0.4;
   height: 100%;
   max-width: 40%;
   background: ${style.secondaryColor};
   display: flex;
   flex-direction: row;
   align-items: center;
   position: relative;
   @media screen and (max-width: 768px){
    min-height: 400px;
    min-width: 100%;
  }
`
export const ProductImageTitle = styled.h1`
  color: rgba(255,255,255,.5);
  font-size: 100px;
  text-transform: uppercase;
    transform: rotate(90deg);
  text-shadow:  0 0 15px rgba(0,0,0,.5);
  @media screen and (max-width: 768px){
    font-size: 50px;
  }
`

export const ProductImage = styled.img`
  position: absolute;
  right: -10%;
  max-width: 400px;
  max-height: 400px;
  background: transparent;
  @media screen and (max-width: 768px){
    right: 0;
    max-width: 300px;
    max-height: 300px;
  }
`;

export const ProductDetails = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    padding-top: 50px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`
export const ProductPrice = styled.h3`
  color: rgba(0,0,0,.8);
  margin-bottom: 10px;
`
export const ProductDesc = styled.p`
  color: rgba(0,0,0,.6);
  width: 70%;
  margin-bottom: 10px;
`
export const ProductTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProductTableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const ProductTr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100px;
  border-radius: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  overflow: hidden;
`

export const ProductTd = styled.span`
  font-size: 25px;
  width: 100%;
  height: 60%;
  text-align: center;
`
export const ProductTdDesc = styled.span`
  font-size: 20px;
  background: ${style.primaryColor};
  width: 100%;
  height: 40%;
  color: rgba(0,0,0,.6);
  box-shadow: inset 0 0 3px rgba(0,0,0,.5);
  text-align: center;
  border-radius: 0 0 20px 20px;
`

export const ProductButton = styled.button`
  border-radius: 50px;
  padding: 10px 40px;
  margin: 10px;
  border: none;
  background: ${style.secondaryColor};
  color: ${style.primaryColor};
  box-shadow: 0 0 5px rgba(0,0,0,.3);
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


export const ProductOther = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;

`;
export const ProductOtherTitle = styled.div`
  font-size: 30px;
  width: 300px;
  padding: 20px;
  color: #000;
  background: ${style.primaryColor};
  border-radius: 0 20px 20px 0;
`
