import React, { useState, useEffect } from "react";
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
} from "../Navbar/NavbarStyled";

const ShopNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const toggleBagOpen = () => setBagOpen(!bagOpen);

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
            <NavBtnLink onClick={toggleBagOpen}>Bag</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <BagModal open={bagOpen} />
    </>
  );
};

export default ShopNavbar;
