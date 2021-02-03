import React from "react";

import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  DescDetails,
  DescPhoneName,
  Table,
  Tr,
  Td,
  Button,
  ProductOther,
  OtherTitle,
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
        <ProductImage />

        <ProductDetails>
          <DescDetails>
            <DescPhoneName>Iphone 11</DescPhoneName>
            <Table>
              <Tr>
                <Td>CPU:</Td>
                <Td>4Ghz</Td>
              </Tr>

              <Tr>
                <Td>RAM:</Td>
                <Td>12GB</Td>
              </Tr>

              <Tr>
                <Td>Storage:</Td>
                <Td>1TB</Td>
              </Tr>
              <Tr>
                <Td>Camera:</Td>
                <Td>100Mp</Td>
              </Tr>
              <Tr>
                <Td>Size:</Td>
                <Td>6,5"</Td>
              </Tr>
              <Tr>
                <Td>Battery:</Td>
                <Td>5000mah</Td>
              </Tr>
              <Tr>
                <Td>Price:</Td>
                <Td>999$</Td>
              </Tr>
            </Table>
            <Button>Add to cart</Button>
          </DescDetails>
        </ProductDetails>
      </ProductContainer>
      <ProductOther>
        <h1>Other phones</h1>
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
