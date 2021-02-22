import React from 'react';
import {animateScroll as scroll} from 'react-scroll';


import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink,FooterLinkS,SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights} from './FooterStyled';
import {FaGithub, FaDribbble, FaLinkedin} from 'react-icons/fa';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            
            <FooterLinkItems>
              <FooterLinkTitle> Navigation </FooterLinkTitle>
                <FooterLinkS to='phones'>XPhones</FooterLinkS>
                <FooterLinkS to='ultrabooks'>XBooks</FooterLinkS>
                <FooterLinkS to='watches'>XWatch</FooterLinkS>
                <FooterLinkS to='tablets'>XTab</FooterLinkS>
                <FooterLinkS to='accessories'>XAccessory</FooterLinkS>

            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Stack </FooterLinkTitle>
                <FooterLink to='/'>React</FooterLink>
                <FooterLink to='/'>Styled Components</FooterLink>
                <FooterLink to='/'>Context API</FooterLink>
                <FooterLink to='/'>Node</FooterLink>

            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Links </FooterLinkTitle>
                <FooterLink to='/'>Home</FooterLink>
                <FooterLink to='/shop'>Shop</FooterLink>
                <FooterLink to='/product/1'>Product</FooterLink>
                <FooterLink to='/admin'>Admin</FooterLink>

            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              X-TECH
            </SocialLogo>
            <WebsiteRights>AX Studio &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label="Github"><FaGithub /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label="Dribbble"><FaDribbble /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
            </SocialIcons>
            
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
