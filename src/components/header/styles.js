import styled from 'styled-components'

import Flex from "../flex"
import Text from "../text"

export const Container = styled(Flex).attrs({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
})`
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
  ${({ isHomePage, theme }) => !isHomePage && `
    box-shadow: 1px 0 8px 2px ${theme.colors.semiTransparent};
  `}
`

export const InnerContainer = styled(Flex).attrs(({isHomePage}) => ({
  width: '100vw',
  height: isHomePage ? '15rem' : '5rem',
  alignItems: 'center',
  m: '0 auto'
}))`
  @media only screen and (max-width: 1300px) {
    ${({ isHomePage }) => isHomePage && `
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 2rem 0;
    `}
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`

export const LogoContainer = styled(Flex)`
  align-items: center;
  ${({ isHomePage }) => !isHomePage && `
    img {
      height: 4em;
      min-height: 4em;
      margin: 0;
    }
  `}
  @media only screen and (max-width: 1300px) {
    ${({ isHomePage }) => isHomePage && `
      margin: 0 auto;
    `}
  }
  @media only screen and (max-width: 900px) {
    ${({ isHomePage }) => !isHomePage && `
      p {
        display: none;
      }
    `}
  }
  @media only screen and (max-width: 800px) {
    > img {
      margin-left: 0;
      width: 6rem;
      min-width: 6rem;
    }
  }
  @media only screen and (max-width: 600px) {
    margin: auto;
    flex-direction: column;
    ${({ isHomePage }) => isHomePage ? `
      > img {
        width: 4rem;
        min-width: 4rem;
        margin-right: 0
      }
    ` : `
      display: none;
    `}
  }
`

export const Navbar = styled(Flex).attrs({
  as: 'nav',
  ml: 'auto',
  justifyContent: 'flex-end'
})`
  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin: 2rem auto 1rem;
    justify-content: space-between;
  }
`

export const NavButton = styled.button` 
  outline: none;
  margin-right: 1rem;
  padding: .5rem 1.2rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 2px solid ${({ theme, selected }) => selected ? theme.colors.silver : theme.colors.white};
  transition: border 200ms ease-out;
  background-color: ${({ theme }) => theme.colors.white};
  p {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.silver};
  }
  @media only screen and (max-width: 600px) {
    border: none;
    padding: 0;
    margin: 0;   
    :hover {
      border: none;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: ${({ selected, theme }) => selected && theme.colors.primary.main};
      text-transform: uppercase;
    }
  }
`

export const TextContainer = styled(Flex).attrs({
  flexDirection: 'column'
})`
  @media only screen and (max-width: 600px) {
    align-items: center;
  }
`

export const Title = styled(Text)`
  white-space: nowrap;
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${({ isHomePage, theme }) => !isHomePage && `
      font-size: ${theme.fontSizes.xlarge};
  `}
  @media only screen and (max-width: 800px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-top: 1rem;
    text-align: center;
    max-width: 90vw;
  }
`

export const Subtitle = styled(Text)`
  margin-left: .1rem;
  white-space: normal;
  font-size: ${({ theme }) => theme.fontSizes.large};
  ${({ isHomePage, theme }) => !isHomePage && `
      font-size: ${theme.fontSizes.small};
  `}
  @media only screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-top: .5rem;
    max-width: 70vw;
  }
`
