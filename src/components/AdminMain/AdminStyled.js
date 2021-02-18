import styled from "styled-components";
import * as style from "../StyleVariables";

//Main site
export const AdminContainer = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  font-size: 30px;
  padding: 0px;
  color: ${style.secondaryColor};
  background:${style.primaryColor};
  border: none;
  transition: 0.3s ease-in;
  cursor: pointer;
  position: relative;
  &:hover{
    color: ${style.primaryColor};
    background:${style.secondaryColor};
    transition: 0.3s ease-in;
  }
`
export const ButtonSpan = styled.span`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
`
export const ButtonActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const EditButton = styled.button`
  width: 60px; 
  height: 30px;
  font-size: 20px;
  background: rgb(255, 255, 0);
  color: #000;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`
export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  background: rgb(255, 0, 0);
  color: #fff;
  padding: 0;
  margin: 5px;
  cursor: pointer;
`

export const Table = styled.table`
width: 90%;
margin-top: 20px;
`
export const TableHead = styled.tr`
  font-weight: bold;
`
export const TableRow = styled.tr`
  height: 30px;
  &:nth-child(odd){
    background: ${style.primaryColorShadow};
  }
  &:nth-child(even){
    background: ${style.secondaryColorShadow};
    color: #fff;
  }
`
export const TableImg = styled.img`
  max-height: 40px;
`
//Add Modal
export const AddItemContainer = styled.section`
  position: fixed;
  width: 500px;
  max-height: 80vh;
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
  overflow: scroll;
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
  font-size: 20px;
  border: none;
  border-bottom: 2px solid ${style.secondaryColor};

`
export const FormLabel = styled.label`
  height: 25px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 10px;
  background: ${style.primaryColor};
  border-radius: 0 20px 20px 0;
`
export const FormButton = styled.button`
  border-radius: 50px;
  padding: 10px 40px;
  margin: 10px;
  border: none;
  background: ${style.primaryColor};
  color: ${style.secondaryColor};
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
    background: ${style.secondaryColor};
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
  }
  &:hover::before{
    width: 100%;
  }
  &:hover{
    color: ${style.primaryColor}
  }
`

export const FormCancel = styled.button`
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