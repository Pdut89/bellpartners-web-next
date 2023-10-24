import styled from "styled-components";
import Flex from "../flex";

export const DownloadLinks = styled(Flex).attrs({
  flexDirection: 'column',
  alignItems: 'center'
})`
  & h5 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.primary.dark};
  }
  & li {
    margin-top: 0.3rem;
  }
  & a {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.primary.dark};
    :hover {
      text-decoration: underline;
    }
  }
`