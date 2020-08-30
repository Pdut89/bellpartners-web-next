import styled from "styled-components"
import Flex from "../../components/flex"

export const Form = styled(Flex).attrs({
  as: 'form',
  flexDirection: 'column',
  width: '50%',
  m: '0 auto'
})`
  height: fit-content;
  border-radius: ${({ theme }) => theme.radii.large};
  padding: 2rem;
  box-shadow: 0 3px 10px 0 ${({ theme }) => theme.colors.semiTransparent};
  @media only screen and (max-width: 800px) {
    width: 80vw;
    margin-top: 5rem;
    min-width: 300px;
  }  
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
  type: 'submit',
  mt: '2rem',
  justifyContent: 'center',
  alignItems: 'center'
})`
  width: 10rem;
  text-align: center;
  height: 2.5rem;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  background-color: ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0 2px 3px 0 ${({ theme }) => theme.colors.semiTransparent};
  cursor: pointer;
  ${({ isDisabled }) => isDisabled && `
    opacity: .5;
    cursor: default;
  `}
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  :disabled {
    opacity: .5;
    cursor: default;
  }
`