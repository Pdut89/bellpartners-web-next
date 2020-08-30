import styled from "styled-components"

import Flex from "../flex"
import Text from "../text"
import Image from '../image'

import bgImage from '../../images/carousel/image-1.jpg'

export const Container = styled(Flex).attrs({
  position: 'relative',
  width: '100vw',
  height: 'calc(100vh - 10rem)',
})`
  overflow: hidden;
`

export const TopCurve = styled(Image)`
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 2;
  width: 100vw;
`

export const AboutCurve = styled(Image)`
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 1;
  width: 100vw;
`

export const ContentContainer = styled(Flex).attrs({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  pt: '10%',
})`
  z-index: 1;
  overflow: hidden;
`

export const Title = styled(Text).attrs({
  as: 'p',
  uppercase: true
})`
  font-size: 3rem;
  width: 60vw;
  max-width: 50rem;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 5vw;
  @media only screen and (max-width: 1300px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }
` 

export const Quote = styled(Text)`
  margin-top: 1em;
  margin: 1em 0 0 5vw;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`

export const SaipaLogo = styled(Flex).attrs({
  bg: 'white',
  mt: '1rem'
})`
  display: block;
  width: 25rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 1px 1px 5px 2px ${({ theme }) => theme.colors.semiTransparent};
  @media only screen and (max-width: 800px) {
    width: 50vw;
    min-width: 300px;
    margin-bottom: 1rem;
  }
`

export const SeesaLogo = styled(SaipaLogo)`
  width: 15rem;
  @media only screen and (max-width: 800px) {
    width: 30vw;
    min-width: 30vw;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 800px) {
    width: 40vw;
    min-width: 150px;
  }
`

export const BgImage = styled(Flex).attrs({
  position: 'absolute',
  width: '100%',
  height: 'calc(100% + 10px)',
  right: 0,
  top: -5
})`
  background: linear-gradient(90deg, rgba(54,54,54,1) 0%,  rgba(54,54,54,.6) 40%, rgba(54,54,54,0) 100%);
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  z-index: -1;
  filter: brightness(.7);
`

export const Footer = styled(Flex).attrs({
  width: '100vw',
  p: '2em 5vw',
  position: 'absolute',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  bottom: '7rem'
})`
  z-index: 1;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;

  }
  @media only screen and (max-width: 600px) {
    align-items: center;
    bottom: 4rem;
  }
`