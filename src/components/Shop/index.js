import React, {useContext} from "react";
import { WaveDown } from "../SectionWave";
import phone from "../../images/aphonemini.png";
import {phones} from '../data';

import {
  ShopContainer,
  ShopBanner,
  ShopSection,
  ShopBoxTitle,
  ShopBoxes,
  ShopBox,
  ShopBoxImg,
  ShopBoxName,
  ShopBoxDesc,
  ShopBoxActions,
  ActionsAdd,
  ActionsPrice,
  ActionsDetails,
} from "./ShopStyled";
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'

function Shop() {
  const [{bagItems}, dispatch] = useContext(StateContext);

  const addToBag = (phone) => {
    //console.log(model, price)
    dispatch({type: actionTypes.ADD_BAG_ITEM, bagItems: [...bagItems, phone]})
  }

  const showPhoneBox = phones.map((phone, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={phone.img} />
              <ShopBoxName>{phone.model}</ShopBoxName>
              <ShopBoxDesc>{phone.ram}/{phone.storage}/{phone.size}</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>{phone.price}</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(phone)}>+</ActionsAdd>
                <ActionsDetails>Details</ActionsDetails>
              </ShopBoxActions>
            </ShopBox>
  ))
  return (
    <>
      <ShopContainer>
        <ShopBanner>
          <WaveDown fill="#000" />
        </ShopBanner>
        <ShopSection>
          <ShopBoxTitle>
            <h3>Phone</h3>{" "}
          </ShopBoxTitle>
          <ShopBoxes>
            {showPhoneBox}
          </ShopBoxes>
        </ShopSection>
        <ShopSection>
          <ShopBoxTitle> Phone</ShopBoxTitle>
          <ShopBoxes>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
          </ShopBoxes>
        </ShopSection>
        <ShopSection>
          <ShopBoxTitle> Phone</ShopBoxTitle>
          <ShopBoxes>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
            <ShopBox></ShopBox>
          </ShopBoxes>
        </ShopSection>
      </ShopContainer>
    </>
  );
}

export default Shop;
