import styled from 'styled-components'
import Text from '../../components/text'

export const Link = styled(Text).attrs({
  color: 'white'
})`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`
