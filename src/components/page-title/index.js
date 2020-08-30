import styled from "styled-components"
import Text from '../text'

const PageTitle = styled(Text).attrs({
  as: 'p',
  color: 'primary.dark'
})`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
`

export default PageTitle