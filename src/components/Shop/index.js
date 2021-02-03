import React from "react";
import { WaveDown } from "../SectionWave";
import phone from "../../images/aphonemini.png";

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

function Shop() {
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
            <ShopBox>
              <ShopBoxImg src={phone} />
              <ShopBoxName>XPhone Pro</ShopBoxName>
              <ShopBoxDesc>16GB/512GB/6,5"</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>999$</ActionsPrice>
                <ActionsAdd>+</ActionsAdd>
                <ActionsDetails>Details</ActionsDetails>
              </ShopBoxActions>
            </ShopBox>
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
