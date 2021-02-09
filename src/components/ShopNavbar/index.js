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
  NavLinks,
  NavBtn,
  NavBtnLink,
  BtnBagQty
} from "../Navbar/NavbarStyled";
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'

const ShopNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [{bagOpen, bagItems}, dispatch] = useContext(StateContext);

  const toggleBagOpen = () => {
    console.log('switch bag', bagOpen)
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
              <NavLinks
                to="phones"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Phones
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="ultrabooks"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Ultrabooks
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="watches"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Watches
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="tablets"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Tablets
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="accessories"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Accessories
              </NavLinks>
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

export default ShopNavbar;
