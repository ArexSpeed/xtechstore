import React, { useState } from "react";
import ProductNavbar from "../components/ProductSite/ProductNavbar";
import Sidebar from "../components/ProductSite/Sidebar";
import ProductSite from "../components/ProductSite";
import Footer from "../components/Footer";

function Product() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("toggle");
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProductNavbar toggle={toggle} />
      <ProductSite />
      <Footer />
    </>
  );
}

export default Product;
