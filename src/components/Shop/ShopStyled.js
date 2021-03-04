import styled from "styled-components";
import * as style from "../StyleVariables";

export const ShopContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const ShopBanner = styled.div`
  width: 100vw;
  height: 100%;
  border-radius: 10px;
  margin: 20px auto;
  background: url(${props => props.img ? props.img : ''});
  background-position: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
`;
export const ShopSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 50vh;
  display: flex;
  flex-direction: column;
`
export const ShopBoxSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  transform: translateY(-150px);
`;
export const ShopBoxTitle = styled.article`
  max-width: 50px;
  height: 350px;
  margin: 20px 0;
  background: ${style.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 20px 20px 0;
  border: none;
  box-shadow: 2px 2px 5px ${style.secondaryColorShadow};
  z-index: 3;
  & h3 {
    text-transform: uppercase;
    transform: rotate(90deg);
    color: #fff;
    @media screen and (max-width: 768px){
    font-size: 14px;
    }
  }
  
`;
export const ShopBoxes = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;
export const ShopBox = styled.article`
  min-width: 250px;
  height: 350px;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: #fff;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2),
    -5px 0 10px rgba(255, 255, 255, 0.2);
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 10%;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      ${style.primaryColorShadow},
      ${style.secondaryColorShadow}
    );
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2),
      -5px 0 10px rgba(255, 255, 255, 0.2);
  }
  &::after {
    position: absolute;
    content: "";
    top: 10%;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      ${style.primaryColorShadow},
      ${style.secondaryColorShadow}
    );
    opacity: 1;
  }
  &:hover::after {
    transform: scale(1.4);
    opacity: 0;
    transition: all 1s ease-in;
  }
`;
export const ShopBoxImg = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin-top: 15%;
  z-index: 2;
`;
export const ShopBoxName = styled.h3`
  color: #000;
  font-size: 20px;
  z-index: 2;
`;
export const ShopBoxDesc = styled.p`
  color: #333;
  font-size: 16px;
  z-index: 2;
`;
export const ShopBoxActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  z-index: 2;
`;
export const ActionsPrice = styled.div`
  width: 80px;
  height: 25px;
  left: 0;
  border-radius: 0 10px 10px 0;
  background: ${style.primaryColor};
  color: #000;
  font-size: 16px;
  text-align: center;
  transition: all 0.5s ease-in;
  &:hover {
    width: 100px;
  }
`;
export const ActionsDetails = styled.div`
  width: 80px;
  height: 25px;
  right: 0;
  border-radius: 10px 0 0 10px;
  background: ${style.secondaryColor};
  color: #fff;
  font-size: 16px;
  text-align: center;
  transition: all 0.5s ease-in;
  cursor: pointer;
  &:hover {
    width: 100px;
  }
`;
export const ActionsAdd = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: none;
  right: 10%;
  background: linear-gradient(
    45deg,
    ${style.primaryColorShadow},
    ${style.secondaryColorShadow}
  );
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2),
    -5px 0 10px rgba(255, 255, 255, 0.2);
  z-index: 2;
`;
