import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinkProduct} from '../Sidebar/SidebarStyled';

function Sidebar({isOpen, toggle}) {


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkProduct to='/product/1' onClick={toggle}>Phones</SidebarLinkProduct>
          <SidebarLinkProduct to='/product/13' onClick={toggle}>Ultrabooks</SidebarLinkProduct>
          <SidebarLinkProduct to='/product/25' onClick={toggle}>Watches</SidebarLinkProduct>
          <SidebarLinkProduct to='/product/30' onClick={toggle}>Tablets</SidebarLinkProduct>
          <SidebarLinkProduct to='/product/39' onClick={toggle}>Accessories</SidebarLinkProduct>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar