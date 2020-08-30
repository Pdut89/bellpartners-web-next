import styled from 'styled-components'
import Flex from '../flex'

const Image = styled(Flex).attrs(props => ({
  as: 'img',
  alt: props.alt || ''
}))`
  min-width: ${({ width, minWidth }) => width || minWidth || 'unset'};
`

export default Image