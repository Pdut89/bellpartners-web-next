import styled from "styled-components"

import Flex from "../../components/flex"
import Text from "../../components/text"
import Image from "../../components/image"

import aboutBgLine from '../../images/about/about-bg-line.svg'

export const BgLine = styled(Flex).attrs({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})`
  background-image: url(${aboutBgLine});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  z-index: -2;
  overflow: hidden;
  @media only screen and (max-width: 1020px) {
    display: none;
  }
`

export const TextContainer = styled(Flex).attrs(props => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  p: "2em 0",
  ...props
}))`
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justifyContent: 'center';
    padding: 0;
  }
`

export const Paragraph = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  letter-spacing: .8px;
  line-height: 1.3;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

export const AboutImage = styled(Image)`
  margin: 0 0 0 5%;
  width: 20%;
  box-shadow: 0 5px 15px 0px ${({ theme }) => theme.colors.semiTransparent};
  border-radius: ${({ theme }) => theme.radii.full};
  @media only screen and (max-width: 1020px) {
    width: 30vw;
  }
  @media only screen and (max-width: 800px) {
    margin: 3rem auto 3rem;
    width: 50vw;
  }
`

export const Quote = styled(Text)`
  margin-top: 1rem;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  font-style: italic;
  @media only screen and (max-width: 1020px) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    text-align: center;
  }
`