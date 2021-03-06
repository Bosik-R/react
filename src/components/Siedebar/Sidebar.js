
import React from 'react';
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './Sidebar.Elements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} >About</SidebarLink>
          <SidebarLink to='services' onClick={toggle} >Services</SidebarLink>
          <SidebarLink to='discovery' onClick={toggle} >Discovery</SidebarLink>
          <SidebarLink to='signup' onClick={toggle} >Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
