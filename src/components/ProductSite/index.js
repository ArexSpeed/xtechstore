import React, {useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import {products} from '../data';

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

const ProductSite = ({match}) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const showProduct = products.filter(product => product.id === +match.params.id)
  .map((product, index) => (
    product.device === 'Phone' || product.device === 'Ultrabook' || product.device === 'Tablet'
    ?
    (
    <>
    <ProductContainerImage key={index}>
    <ProductImageTitle>{product.series}</ProductImageTitle>
    <ProductImage src={product.img} />
  </ProductContainerImage>

  <ProductDetails>
    <ProductTitle>{product.model}</ProductTitle>
    <ProductPrice>{product.price}$</ProductPrice>
    <ProductDesc>{product.description}</ProductDesc>
    <ProductTable>
      <ProductTableRow>
      <ProductTr>
        <ProductTd>{product.ram}</ProductTd>
        <ProductTdDesc>RAM</ProductTdDesc>
      </ProductTr>
      <ProductTr>
        <ProductTd>{product.storage}</ProductTd>
        <ProductTdDesc>Storage</ProductTdDesc>
      </ProductTr>
      <ProductTr>
        <ProductTd>{product.size}"</ProductTd>
        <ProductTdDesc>Size</ProductTdDesc>
      </ProductTr>
      </ProductTableRow>
      <ProductTableRow>
      <ProductTr>
        <ProductTd>{product.camera}</ProductTd>
        <ProductTdDesc>Camera</ProductTdDesc>
      </ProductTr>
      <ProductTr>
        <ProductTd>{product.cpu}</ProductTd>
        <ProductTdDesc>CPU</ProductTdDesc>
      </ProductTr>
      <ProductTr>
        <ProductTd>{product.battery}</ProductTd>
        <ProductTdDesc>Battery</ProductTdDesc>
      </ProductTr>
      </ProductTableRow>
    </ProductTable>

    <ProductButton>Add to cart</ProductButton>
  </ProductDetails>
  </>
    )
    : product.device === 'Watch' ?

    (
      <>
      <ProductContainerImage key={index}>
      <ProductImageTitle>{product.series}</ProductImageTitle>
      <ProductImage src={product.img} />
    </ProductContainerImage>
  
    <ProductDetails>
      <ProductTitle>{product.model}</ProductTitle>
      <ProductPrice>{product.price}$</ProductPrice>
      <ProductDesc>{product.description}</ProductDesc>
      <ProductTable>
        <ProductTableRow>
        <ProductTr>
          <ProductTd>{product.ram}</ProductTd>
          <ProductTdDesc>RAM</ProductTdDesc>
        </ProductTr>
        <ProductTr>
          <ProductTd>{product.storage}</ProductTd>
          <ProductTdDesc>Storage</ProductTdDesc>
        </ProductTr>
        <ProductTr>
          <ProductTd>{product.size}"</ProductTd>
          <ProductTdDesc>Size</ProductTdDesc>
        </ProductTr>
        </ProductTableRow>
        <ProductTableRow>
        <ProductTr>
          <ProductTd>{product.fitness}</ProductTd>
          <ProductTdDesc>Sports</ProductTdDesc>
        </ProductTr>
        <ProductTr>
          <ProductTd>{product.cpu}</ProductTd>
          <ProductTdDesc>CPU</ProductTdDesc>
        </ProductTr>
        <ProductTr>
          <ProductTd>{product.battery}</ProductTd>
          <ProductTdDesc>Battery</ProductTdDesc>
        </ProductTr>
        </ProductTableRow>
        <ProductTableRow>
        <p>Gps: {product.addons.gps ? <span>&#10003;</span> : 	<span>&times;</span>}</p>
      <p>Health Care: {product.addons.healthcare ? <span>&#10003;</span> : <span>&times;</span>}</p>
      <p>WiFi: {product.addons.wifi ? <span>&#10003;</span> : <span>&times;</span>}</p>
      <p>Esim: {product.addons.esim ? <span>&#10003;</span> : <span>&times;</span>}</p>
      <p>Waterproof: {product.addons.waterproof ? <span>&#10003;</span> : <span>&times;</span>}</p>
        </ProductTableRow>
      </ProductTable>
  
      <ProductButton>Add to cart</ProductButton>
    </ProductDetails>
    </>
      ) : 
      product.device === 'Accessory' ?

    (
      <>
      <ProductContainerImage key={index}>
      <ProductImageTitle>{product.series}</ProductImageTitle>
      <ProductImage src={product.img} />
    </ProductContainerImage>
  
    <ProductDetails>
      <ProductTitle>{product.model}</ProductTitle>
      <ProductPrice>{product.price}$</ProductPrice>
      <ProductDesc>{product.description}</ProductDesc>
      
  
      <ProductButton>Add to cart</ProductButton>
    </ProductDetails>
    </>
      ) : ''
  ))

  return (
    <>
      <ProductContainer>
          {showProduct}
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

export default withRouter(ProductSite);
