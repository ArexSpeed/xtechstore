import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from '../Sidebar/SidebarStyled';

function Sidebar({isOpen, toggle}) {


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='phones' onClick={toggle}>Phones</SidebarLink>
          <SidebarLink to='ultrabooks' onClick={toggle}>Ultrabooks</SidebarLink>
          <SidebarLink to='watches' onClick={toggle}>Watches</SidebarLink>
          <SidebarLink to='tablets' onClick={toggle}>Tablets</SidebarLink>
          <SidebarLink to='accessories' onClick={toggle}>Accessories</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar