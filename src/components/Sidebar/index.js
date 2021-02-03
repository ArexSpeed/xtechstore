import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarStyled';

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
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/store'>Store</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar