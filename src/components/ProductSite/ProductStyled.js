import styled from "styled-components";
import * as style from "../StyleVariables";

export const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;
export const ProductImage = styled.img`
  flex: 0.5;
  width: 400px;
  height: 400px;
  background: red;
`;

export const ProductDetails = styled.div`
  flex: 0.5;
`;

export const ProductOther = styled.div`
  width: 100%;
  background: yellow;
  display: flex;
  flex-direction: column;
`;

export const DescDetails = styled.div`
  border-radius: 20px;
  height: 500px;
  width: 300px;
  background: linear-gradient(60deg, black, ${style.secondaryColor});
  box-shadow: inset -3px 3px 20px ${style.secondaryColorShadow},
    inset -5px 5px 20px ${style.primaryColorShadow}, inset 5px -5px 20px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;

  &.rotate {
    transform: rotateY(360deg);
    transition: all 1s ease-in;
  }
  &.rotate2 {
    transform: rotateY(0deg);
    transition: all 1s ease-in;
  }
`;
export const DescPhoneName = styled.div`
  text-align: center;
  padding-top: 5px;
  background: ${style.primaryColor};
  border-radius: 0 0 5px 5px;
  top: 0;
  width: 70%;
  font-size: 20px;
`;
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
export const Tr = styled.tr`
  width: auto;
  border-bottom: 2px solid ${style.primaryColor};
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
export const Td = styled.td`
  color: #fff;
  font-size: 16px;
`;
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
  &:before {
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
  &:hover::before {
    width: 100%;
  }
  &:hover {
    color: ${style.secondaryColor};
  }
`;
