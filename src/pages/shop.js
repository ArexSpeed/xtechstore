import React, { useState } from "react";
import ShopNavbar from "../components/ShopNavbar";
import Sidebar from "../components/Sidebar";
import ShopElement from "../components/Shop";

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
    </>
  );
}

export default Shop;
