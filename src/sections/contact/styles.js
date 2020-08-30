import styled from "styled-components"

import Flex from "../../components/flex"
import Text from "../../components/text"
import Image from "../../components/image"

export const TopCurve = styled(Image)`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100vw;
  z-index: 2;
`

export const ContactContainer = styled(Flex).attrs({
  m: '5rem 0 0',
})`
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }  
`

export const DetailsContainer = styled(Flex).attrs({
  flexDirection: 'column'
})`
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    width: 80vw;
    min-width: 300px;
  }
`

export const Subtitle= styled(Text).attrs({
  color: 'primary.dark',
  pb: '1rem',
  width: '15rem'
})`
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  font-size: ${({ theme }) => theme.fontSizes.large};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary.light};
`

export const ContactLink = styled(Flex).attrs({
  as: 'a'
})`
  cursor: pointer;
`

export const SealLink = styled(Text).attrs({
  as: 'a',
  target: '_blank',
  mt: '.8rem',
  fontSize: 'small',
  color: 'primary.dark'
})`
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
`