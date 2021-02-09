import React, { useState, useEffect, useContext } from "react";
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
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'

const NavAdmin = ({ toggle }) => {
  const [{adminPanel}, dispatch] = useContext(StateContext)
  const [active, setActive] = useState('phones')
  console.log(adminPanel, 'adminPanel')
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
              <NavLinksAdmin to="admin" className={active === 'phones' ? 'active' : ''} onClick={() => {
                dispatch({type: actionTypes.ADMIN_PANEL, payload: 'phones'})
                setActive('phones')
                }}>
                Phones
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin" className={active === 'ultrabooks' ? 'active' : ''} onClick={() => {
                dispatch({type: actionTypes.ADMIN_PANEL, payload: 'ultrabooks'})
                setActive('ultrabooks')
                }}>
                Ultrabooks
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin" className={active === 'watches' ? 'active' : ''} onClick={() => {
                dispatch({type: actionTypes.ADMIN_PANEL, payload: 'watches'})
                setActive('watches')
                }}>
                Watches
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
              <NavLinksAdmin to="admin" className={active === 'tablets' ? 'active' : ''} onClick={() => {
                dispatch({type: actionTypes.ADMIN_PANEL, payload: 'tablets'})
                setActive('tablets')
                }}>
                Tablets
              </NavLinksAdmin>
            </NavItem>
            <NavItem>
            <NavLinksAdmin to="admin" className={active === 'accessories' ? 'active' : ''} onClick={() => {
                dispatch({type: actionTypes.ADMIN_PANEL, payload: 'accessories'})
                setActive('accessories')
                }}>
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
