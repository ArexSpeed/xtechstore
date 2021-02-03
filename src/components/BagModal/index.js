import React, { useState, useContext } from "react";
import phone from "../../images/aphonemini.png";
import {phones} from '../data';

import {
  BagContainer,
  BagTitle,
  BagItem,
  ItemImg,
  ItemName,
  ItemDelete,
  ItemDetails,
  ItemPrice,
  ItemQty,
  QtyMinus,
  QtyPlus,
  QtySum,
} from "./BagStyled";

import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


function BagModal({ open }) {
  const [sum, setSum] = useState(0);
  const [{bagItems}, dispatch] = useContext(StateContext)

  let totalPrice = []
  const showBagItems = bagItems.map((item, index) => 
  {
    totalPrice.push(item.price)
    return (
      <BagItem key={index}>
              <ItemImg src={item.img} />
              <ItemDetails>
                <ItemName>{item.model}</ItemName>
                <ItemQty>
                  <ItemPrice>${item.price}</ItemPrice>
                  <QtyMinus onClick={() => setSum(sum - 1)}>-</QtyMinus>
                  <QtySum>{sum}</QtySum>
                  <QtyPlus onClick={() => setSum(sum + 1)}>+</QtyPlus>
                </ItemQty>
              </ItemDetails>
              <ItemDelete onClick={() => dispatch({type: actionTypes.DELETE_BAG_ITEM, payload: item.model})}>X</ItemDelete>
            </BagItem>
    )
  }
  )
  
  return (
    <>
      {open && (
        <BagContainer>
          <BagTitle>My Cart</BagTitle>
          Total: ${totalPrice.reduce((a,b) => a+b)}
          {showBagItems}

        </BagContainer>
      )}
    </>
  );
}

export default BagModal;
