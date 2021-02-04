import React from "react";

import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductContainerImage,
  ProductImageTitle,
  ProductTitle,
  ProductPrice,
  ProductDesc,
  ProductTable,
  ProductTableRow,
  ProductTr,
  ProductTd,
  ProductTdDesc,
  ProductButton,
  ProductOther,
  ProductOtherTitle,

} from "./ProductStyled";

import {
  ShopBoxes,
  ShopBox,
  ShopBoxImg,
  ShopBoxName,
  ShopBoxDesc,
  ShopBoxActions,
  ActionsPrice,
  ActionsAdd,
  ActionsDetails,
} from "../Shop/ShopStyled";

function ProductSite({ match }) {
  return (
    <>
      <ProductContainer>
        <ProductContainerImage>
          <ProductImageTitle>XBook</ProductImageTitle>
          <ProductImage />
        </ProductContainerImage>

        <ProductDetails>
          <ProductTitle>XPhone Pro</ProductTitle>
          <ProductPrice>1200$</ProductPrice>
          <ProductDesc>The best of our offer</ProductDesc>
          <ProductTable>
            <ProductTableRow>
            <ProductTr>
              <ProductTd>64GB</ProductTd>
              <ProductTdDesc>RAM</ProductTdDesc>
            </ProductTr>
            <ProductTr>
              <ProductTd>128GB</ProductTd>
              <ProductTdDesc>Storage</ProductTdDesc>
            </ProductTr>
            <ProductTr>
              <ProductTd>6,5"</ProductTd>
              <ProductTdDesc>Size</ProductTdDesc>
            </ProductTr>
            </ProductTableRow>
            <ProductTableRow>
            <ProductTr>
              <ProductTd>120MPx</ProductTd>
              <ProductTdDesc>Camera</ProductTdDesc>
            </ProductTr>
            <ProductTr>
              <ProductTd>X-36</ProductTd>
              <ProductTdDesc>CPU</ProductTdDesc>
            </ProductTr>
            <ProductTr>
              <ProductTd>5000mAh</ProductTd>
              <ProductTdDesc>Battery</ProductTdDesc>
            </ProductTr>
            </ProductTableRow>
          </ProductTable>

          <ProductButton>Add to cart</ProductButton>
        </ProductDetails>
      </ProductContainer>
      
      <ProductOther>
        <ProductOtherTitle>Other phones</ProductOtherTitle>
        <ShopBoxes>
          <ShopBox>
            <ShopBoxImg />
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
      </ProductOther>
    </>
  );
}

export default ProductSite;
