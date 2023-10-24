import React from 'react'
import Flex from '../flex'
import Text from '../text'
import { DownloadLinks } from './styles'

const formLinks = [
  {
    href: '/files/Form-3-PAIA.pdf',
    name: 'Outcome of request and of fees payable.pdf'
  },
  {
    href: '/files/InfoRegSA-PAIA-Form02-Reg7.pdf',
    name: 'Request for Access to Record.pdf'
  },
  {
    href: '/files/InfoRegSA-PAIA-Form04-Reg9.pdf',
    name: 'Internal Appeal Form.pdf'
  }
]

const Footer = () => {

  return (
    <Flex 
      as='footer'
      p="2rem 0 4rem"
      flexDirection="column"
      mt='2rem'
    > 
      <DownloadLinks>
        <h5>Access to Information Forms</h5>
        <Flex as='ul' flexDirection='column' alignItems='center'>
          {formLinks.map(({ name, href }) => (
            <li key={href}>
              <Flex as='a' download title='download' href={href}>
                {name}
                <Flex as='img' alt='download' src='/download.svg' height='1rem' width='1rem' />
              </Flex>
              
            </li>
          ))}
        </Flex>
      </DownloadLinks>

      <Flex
        mt='3rem'
        flexDirection="column"
        alignItems="center"
      >
        {['Bell Partners (Pty) Ltd', 'Co Reg No: 2018/084198/07'].map(text => (
          <Text
            key={text}
            color="primary.dark"
            fontSize="small"
            uppercase
            weight="extrabold"
            mt=".5rem"
          >
            {text}
          </Text>
        ))}
      </Flex>

    </Flex>
  )
}

export default Footer