import React from 'react'
import Link from 'next/link'

import logo from '../../images/home/logo.svg'

import {
  Container,
  InnerContainer,
  LogoContainer,
  TextContainer,
  Navbar,
  NavButton,
  Title,
  Subtitle
} from './styles'

import Text from '../text'
import Image from '../image'

import { navData } from './data'

import scrollToSection from '../../utils/scroll-to-section'

const Header = ({ visibleSection }) => {
  const isHomePage = visibleSection === ''

  const renderNavLink = ({ title, href }) => {
    const isActive = href === `/${visibleSection}`

    return (
      <NavButton
        key={href}
        type="button" 
        onClick={() => scrollToSection(href)}
        selected={isActive}
      >
        <Link href={href} scroll={false} shallow>
          <Text 
            noWrap
            color="secondary.dark"
          >
            {title}
          </Text>
        </Link>  
      </NavButton>
    )
  }
  
  return (
    <Container isHomePage={isHomePage}> 
      <InnerContainer isHomePage={isHomePage}>
        <LogoContainer isHomePage={isHomePage}>
          <Image
            src={logo}
            width="7rem"
            m="0 2rem 0 1rem"
          />
          <TextContainer>
            <Title
              noWrap
              uppercase
              color='primary.main'
              isHomePage={isHomePage}
            >
              Bell Partners (Pty) Ltd
            </Title>
            <Subtitle
              noWrap
              uppercase
              isHomePage={isHomePage}
            >
              Registered accountants and reviewers (Saipa)
            </Subtitle>
          </TextContainer>
        </LogoContainer>
        
        <Navbar>
          {navData.map(renderNavLink)}
        </Navbar>
      </InnerContainer>
    </Container>
  )
}

export default Header