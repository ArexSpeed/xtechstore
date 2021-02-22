import React, { useState, useContext } from "react";
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

  // totalItems -> array of price and qty of one item in bag
  let totalItems = []
  const showBagItems = bagItems.map((item, index) => 
  {
    totalItems.push({price: item.price, qty: item.qty})
    return (
      <BagItem key={index}>
              <ItemImg src={item.img} />
              <ItemDetails>
                <ItemName>{item.model}</ItemName>
                <ItemQty>
                  <ItemPrice>${item.price}</ItemPrice>
                  <QtyMinus onClick={() => item.qty > 1 ? dispatch({type: actionTypes.MINUS_ITEM_QTY, payload: item}) : dispatch({type: actionTypes.DELETE_BAG_ITEM, payload: item.id})}>-</QtyMinus>
                  <QtySum>{item.qty}</QtySum>
                  <QtyPlus onClick={() => dispatch({type: actionTypes.PLUS_ITEM_QTY, payload: item})}>+</QtyPlus>
                </ItemQty>
              </ItemDetails>
              <ItemDelete onClick={() => dispatch({type: actionTypes.DELETE_BAG_ITEM, payload: item.id})}>X</ItemDelete>
            </BagItem>
    )
  }
  )
  //totalPrice -> price of one chosen item -> price*qty
  let totalPrice = []
  totalItems.map(item => totalPrice.push(item.price*item.qty))
  
  return (
    <>
      {open && (
        <BagContainer>
          <BagTitle>My Cart</BagTitle>
          Total: 
          ${bagItems.length > 0 && totalPrice.reduce((a,b) => a+b)}
          {showBagItems}

        </BagContainer>
      )}
    </>
  );
}

export default BagModal;
