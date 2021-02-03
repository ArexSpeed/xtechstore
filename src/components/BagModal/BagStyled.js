import styled from "styled-components";
import * as style from "../StyleVariables";

export const BagContainer = styled.section`
  position: fixed;
  top: 80px;
  right: 10%;
  width: 350px;
  max-height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: none;
  background: #fff;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2),
    -5px 0 10px rgba(255, 255, 255, 0.2);
  z-index: 10;
  overflow-y: scroll;
`;
export const BagTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const BagItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.1);
  }
`;
export const ItemImg = styled.img`
  max-height: 70px;
`;
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 70%;
`;
export const ItemName = styled.h5`
  color: #000;
  font-size: 22px;
`;
export const ItemPrice = styled.h6`
  color: #999;
  font-size: 20px;
`;
export const ItemQty = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  background: transparent;
`;
export const QtyMinus = styled.button`
  color: #fff;
  background: red;
  margin: 0 5px;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
`;
export const QtyPlus = styled.button`
  color: #fff;
  background: green;
  margin: 0 5px;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
`;
export const QtySum = styled.button`
  color: #000;
  margin: 0 5px;
  border: none;
  background: transparent;
`;

export const ItemDelete = styled.button`
  color: red;
  font-size: 20px;
  border: none;
  background: transparent;
`;
