import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

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
} from "../Navbar/NavbarStyled";

const NavAdmin = ({ toggle }) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            X-TECH
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksAdmin to="admin/phones">
                Phones
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin/ultrabooks">
                Ultrabooks
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin/watches">
                Watches
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin/tablets">
                Tablets
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin/accessories">
                Accessories
              </NavLinksAdmin>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/shop">Shop</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavAdmin;
