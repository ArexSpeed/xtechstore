import React, { useState } from "react";
import ShopNavbar from "../components/ShopNavbar";
import Sidebar from "../components/ShopNavbar/Sidebar";
import ShopElement from "../components/Shop";
import Footer from "../components/Footer";

function Shop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("toggle");
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ShopNavbar toggle={toggle} />
      <ShopElement />

      <Footer />
      
    </>
  );
}

export default Shop;
