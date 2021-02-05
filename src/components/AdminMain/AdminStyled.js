import styled from "styled-components";
import * as style from "../StyleVariables";

export const AddItemContainer = styled.section`
  position: fixed;
  width: 500px;
  max-height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
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
`;

export const FormAdd = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`
export const FormInput = styled.input`
  width: 50%;
  height: 25px;
  border-radius: 10px;
  font-size: 20px;
`
export const FormLabel = styled.label`
  height: 25px;
  border-radius: 10px;
  font-size: 20px;
`
export const FormButton = styled.button`
  border-radius: 50px;
  padding: 10px 40px;
  margin: 10px;
  border: none;
  background: ${style.secondaryColor};
  color: ${style.primaryColor};
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  position: relative;
  cursor: pointer;
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