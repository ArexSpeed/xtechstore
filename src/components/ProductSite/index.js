import React, {useState, useEffect, useContext} from "react";
import { withRouter, Link } from 'react-router-dom';
import {products} from '../data';
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'

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
  const [device, setDevice] = useState()
  const [{bagItems}, dispatch] = useContext(StateContext);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  useEffect(() => {
    products.find(product => product.id === +match.params.id && setDevice(product.device))
    console.log(device, 'device')
  }, [match.params])


  const addToBag = (phone) => {

    dispatch({type: actionTypes.ADD_BAG_ITEM, bagItems: [...bagItems, {...phone, qty: 1}]})
  }
 
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

    <ProductButton onClick={() => addToBag(product)}>Add to cart</ProductButton>
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
  
      <ProductButton onClick={() => addToBag(product)}>Add to cart</ProductButton>
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
      
  
      <ProductButton onClick={() => addToBag(product)}>Add to cart</ProductButton>
    </ProductDetails>
    </>
      ) : ''
  ))

  
  const showOther = products.filter(product => product.device === device)
  .map((product, index) => (
    
    <ShopBox key={index}>
              <ShopBoxImg src={product.img} />
              <ShopBoxName>{product.model}</ShopBoxName>
              {product.device !== 'Accessory' && (<ShopBoxDesc>{product.ram}/{product.storage}/{product.size}"</ShopBoxDesc>)}
              
              <ShopBoxActions>
                <ActionsPrice>{product.price}$</ActionsPrice>
                <ActionsAdd onClick={() => addToBag(product)}>+</ActionsAdd>
                <Link to={`/product/${product.id}`} onClick={() => window.scrollTo(0,0)}> <ActionsDetails>Details</ActionsDetails></Link>
              </ShopBoxActions>
            </ShopBox>
    
  ))

  return (
    <>
      <ProductContainer>
          {showProduct}
      </ProductContainer>
      
      <ProductOther>
        <ProductOtherTitle>Other {device}</ProductOtherTitle>
        <ShopBoxes>
          {showOther}
        </ShopBoxes>
      </ProductOther>
    </>
  );
}

export default withRouter(ProductSite);
