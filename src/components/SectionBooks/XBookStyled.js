import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import * as style from "../StyleVariables";

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
`;

export const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  color: #000;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const P = styled.p`
  margin: 24px auto;
  color: #000;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const BooksSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const BookCard = styled.div`
  width: 50%;
  height: 500px;
  padding: 20px 0;
  background: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3 ? "white" : "black"};
  color: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3 ? "black" : "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const BookImg = styled.img`
  max-width: 80%;
`;
export const BookTitle = styled.h3`
  font-size: 30px;
`;

export const BookDesc = styled.h5`
  font-size: 20px;
`;

export const BookCardHover = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3
      ? style.secondaryColorShadow
      : style.primaryColorShadow};
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  /* transform: ${({ transition }) =>
    transition ? "translateX(100%)" : "translateX(-100%)"};
  transition: transform 2s ease-in; */
`;
export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3 ? "white" : "black"};
`;
export const BookHoverTitle = styled.h3`
  text-align: center;
  padding-top: 5px;
  background: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3
      ? style.primaryColor
      : style.secondaryColor};
  color: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3 ? "black" : "white"};
  border-radius: 0 0 5px 5px;
  top: 0;
  width: 70%;
  font-size: 30px;
`;
export const Tr = styled.tr`
  width: auto;
  border-bottom: 2px solid
    ${(props) =>
      props.cardNo === 0 || props.cardNo === 3
        ? style.primaryColor
        : style.secondaryColor};
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
export const Td = styled.td`
  font-size: 16px;
`;
export const BookButton = styled.button`
  font-size: 30px;
  border-radius: 20px;
  border: none;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  background: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3
      ? style.primaryColor
      : style.secondaryColor};
  color: ${(props) =>
    props.cardNo === 0 || props.cardNo === 3 ? "black" : "white"};
`;
