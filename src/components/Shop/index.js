import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { WaveDown } from "../SectionWave";
import {phones} from '../data';
import {xbooks} from '../data';
import {tablets} from '../data';
import {watches} from '../data';
import {accessories} from '../data';

import {
  ShopContainer,
  ShopBanner,
  ShopSection,
  ShopBoxSection,
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
    console.log(phone, 'add to bag')
    dispatch({type: actionTypes.ADD_BAG_ITEM, bagItems: [...bagItems, {...phone, qty: 1}]})
  }

  const showPhoneBox = phones.map((phone, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={phone.img} />
              <ShopBoxName>{phone.model}</ShopBoxName>
              <ShopBoxDesc>{phone.ram}/{phone.storage}/{phone.size}"</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>{phone.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(phone)}>+</ActionsAdd>
                <Link to={`/product/${phone.id}`}> <ActionsDetails>Details</ActionsDetails></Link>
              </ShopBoxActions>
            </ShopBox>
  ))

  const showXBooksBox = xbooks.map((ultrabook, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={ultrabook.img} />
              <ShopBoxName>{ultrabook.model}</ShopBoxName>
              <ShopBoxDesc>{ultrabook.ram}/{ultrabook.storage}/{ultrabook.size}"</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>{ultrabook.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(ultrabook)}>+</ActionsAdd>
                <Link to={`/product/${ultrabook.id}`}> <ActionsDetails>Details</ActionsDetails></Link>
              </ShopBoxActions>
            </ShopBox>
  ))

  const showTabletsBox = tablets.map((tablet, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={tablet.img} />
              <ShopBoxName>{tablet.model}</ShopBoxName>
              <ShopBoxDesc>{tablet.ram}/{tablet.storage}/{tablet.size}"</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>{tablet.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(tablet)}>+</ActionsAdd>
                <Link to={`/product/${tablet.id}`}> <ActionsDetails>Details</ActionsDetails></Link>
              </ShopBoxActions>
            </ShopBox>
  ))

  const showWatchesBox = watches.map((watch, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={watch.img} />
              <ShopBoxName>{watch.model}</ShopBoxName>
              <ShopBoxDesc>{watch.ram}/{watch.storage}/{watch.size}"</ShopBoxDesc>
              <ShopBoxActions>
                <ActionsPrice>{watch.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(watch)}>+</ActionsAdd>
                <Link to={`/product/${watch.id}`}> <ActionsDetails>Details</ActionsDetails></Link>
              </ShopBoxActions>
            </ShopBox>
  ))

  const showAccessoriesBox = accessories.map((accessory, index) => (
    <ShopBox key={index}>
              <ShopBoxImg src={accessory.img} />
              <ShopBoxName>{accessory.model}</ShopBoxName>

              <ShopBoxActions>
                <ActionsPrice>{accessory.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(accessory)}>+</ActionsAdd>
                <Link to={`/product/${accessory.id}`}> <ActionsDetails>Details</ActionsDetails></Link>
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
        <ShopBoxSection>
          <ShopBoxTitle>
            <h3>Phones</h3>{" "}
          </ShopBoxTitle>
          <ShopBoxes>
            {showPhoneBox}
          </ShopBoxes>
        </ShopBoxSection>
        <ShopBoxSection>
          <ShopBoxTitle> <h3>Ultrabooks</h3></ShopBoxTitle>
          <ShopBoxes>
            {showXBooksBox}
          </ShopBoxes>
        </ShopBoxSection>
        <ShopBoxSection>
          <ShopBoxTitle> <h3>Tablets</h3></ShopBoxTitle>
          <ShopBoxes>
            {showTabletsBox}
          </ShopBoxes>
        </ShopBoxSection>
        <ShopBoxSection>
          <ShopBoxTitle> <h3>Watches</h3></ShopBoxTitle>
          <ShopBoxes>
            {showWatchesBox}
          </ShopBoxes>
        </ShopBoxSection>
        <ShopBoxSection>
          <ShopBoxTitle> <h3>Accessories</h3></ShopBoxTitle>
          <ShopBoxes>
            {showAccessoriesBox}
          </ShopBoxes>
        </ShopBoxSection>
        </ShopSection>
      </ShopContainer>
    </>
  );
}

export default Shop;
