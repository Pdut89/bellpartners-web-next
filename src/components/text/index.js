import styled from 'styled-components'
import { typography } from 'styled-system'

import Flex from '../flex'

export default styled(Flex).attrs(props => ({
  as: props.as || 'p'
}))`
  ${typography}
  font-size: ${({ theme, fontSize = 'medium' }) => theme.fontSizes[fontSize]};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  white-space: ${({ noWrap }) => noWrap && 'nowrap'};
  font-style: ${({ italic }) => italic && 'italic'};
  font-weight: ${({ theme, weight = 'medium' }) => theme.fontWeights[weight]};
`
