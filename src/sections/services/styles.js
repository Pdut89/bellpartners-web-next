import styled from "styled-components"
import Image from "../../components/image"
import Flex from "../../components/flex"
import Text from "../../components/text"

export const TopCurve = styled(Image)`
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 2;
  width: 100vw;
`

export const ListContainer = styled(Flex).attrs({
  mt: '7rem',
  p: '0 5vw',
  alignItems: 'center',
})`
  ${({ reverse }) => reverse ? `
    flex-direction: row-reverse;
    justify-content: space-between;
    img {
      margin-left: 4rem;
    }
  ` : `
    img {
      margin-right: 4rem;
    }
  `};
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 3rem;
    img {
      margin: 0 0 2rem;
    }
  }
`

export const CategoryImage = styled(Image)`
  width: 20vw;
  box-shadow: 0 5px 15px 0px ${({ theme }) => theme.colors.semiTransparent};
  border-radius: 3vw;
  @media only screen and (max-width: 800px) {
    width: 50vw;
    border-radius: 8vw;
    margin-bottom: 2rem;
  }
`

export const Subtitle = styled(Text).attrs({
  as: 'h3',
  color: 'primary.main'
})`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  @media only screen and (max-width: 800px) {
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }  
`

export const List = styled(Flex).attrs({
  as: 'ul',
  flexDirection: 'column',
  m: '2em 0',
})`
`

export const ListItem = styled(Text).attrs({
  as: 'li',
  color: 'secondary.dark',
  alignItems: 'center',
  m: '.5rem 0'
})`
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media only screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  } 
`

export const Pointer = styled(Flex).attrs({
  mr: '1.5rem'
})`
  height: .7rem;
  width: .7rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  border-bottom: none;
  border-left: none;
  transform: rotate(45deg);
  min-width: .7rem;
`