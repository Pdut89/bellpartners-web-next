import styled from "styled-components"
import Flex from '../flex'

export const StyledInput = styled(Flex).attrs(props => ({
  as: props.as || 'input',
  m: '.5rem 0',
  p: '.7rem 1rem',
  width: '100%'
}))`
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.radii.medium};
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  ::placeholder {
    opacity: .5;
  }
  :disabled {
    opacity: .5
  }
`