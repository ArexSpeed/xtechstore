import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import BagModal from "../BagModal";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksAdmin,
  NavBtn,
  NavBtnLink,
  BtnBagQty
} from "../Navbar/NavbarStyled";
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'

const ProductNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [{bagOpen, bagItems}, dispatch] = useContext(StateContext);

  const toggleBagOpen = () => {
    dispatch({type: actionTypes.SET_BAG_MODAL, bagOpen: !bagOpen})
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  //count of item in bag
  let bagQty = []
  bagItems.map(item => bagQty.push(item.qty))

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            X-TECH
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
            <NavLinksAdmin to="/product/1">
              Phones
            </NavLinksAdmin>
              
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="/product/13" >
                Ultrabooks
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
            <NavLinksAdmin to="/product/25" >
                Watches
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
            <NavLinksAdmin to="/product/30" >
                Tablets
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
            <NavLinksAdmin to="/product/39" >
                Accessories
              </NavLinksAdmin>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={toggleBagOpen}>Bag
            <BtnBagQty>{bagItems.length > 0 && bagQty.reduce((a,b) => a+b)}</BtnBagQty>
            </NavBtnLink>
            
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <BagModal open={bagOpen} />
    </>
  );
};

export default ProductNavbar;
