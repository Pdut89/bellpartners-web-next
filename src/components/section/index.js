import styled from 'styled-components'
import Flex from '../flex'

const Section = styled(Flex).attrs({
  as: 'section'
})`
  position: relative;
  ${({withTopMargin}) => withTopMargin && `
    padding-top: 5rem;
  `};
`

export default Section