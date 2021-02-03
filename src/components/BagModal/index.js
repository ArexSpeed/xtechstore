import React, { useState } from "react";
import phone from "../../images/aphonemini.png";

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


function BagModal({ open }) {
  const [sum, setSum] = useState(0);
  return (
    <>
      {open && (
        <BagContainer>
          <BagTitle>My Cart</BagTitle>
          <BagItem>
            <ItemImg src={phone} />
            <ItemDetails>
              <ItemName>XPhone Pro</ItemName>
              <ItemQty>
                <ItemPrice>999$</ItemPrice>
                <QtyMinus onClick={() => setSum(sum - 1)}>-</QtyMinus>
                <QtySum>{sum}</QtySum>
                <QtyPlus onClick={() => setSum(sum + 1)}>+</QtyPlus>
              </ItemQty>
            </ItemDetails>
            <ItemDelete>X</ItemDelete>
          </BagItem>

          <BagItem>
            <ItemImg src={phone} />
            <ItemDetails>
              <ItemName>XPhone Pro</ItemName>
              <ItemPrice>999$</ItemPrice>
              <ItemQty>
                <QtyMinus>-</QtyMinus>
                <QtySum>1</QtySum>
                <QtyPlus>+</QtyPlus>
              </ItemQty>
            </ItemDetails>
            <ItemDelete>X</ItemDelete>
          </BagItem>

          <BagItem>
            <ItemImg src={phone} />
            <ItemDetails>
              <ItemName>XPhone Pro</ItemName>
              <ItemPrice>999$</ItemPrice>
              <ItemQty>
                <QtyMinus>-</QtyMinus>
                <QtySum>1</QtySum>
                <QtyPlus>+</QtyPlus>
              </ItemQty>
            </ItemDetails>
            <ItemDelete>X</ItemDelete>
          </BagItem>
        </BagContainer>
      )}
    </>
  );
}

export default BagModal;
