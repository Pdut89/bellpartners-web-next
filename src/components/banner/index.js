import React from 'react'

import Flex from '../flex'
import Text from '../text'

import { 
  Container, 
  ContentContainer, 
  Title, 
  Quote, 
  SaipaLogo,
  SeesaLogo,
  BgImage,
  Footer,
  AboutCurve,
  TopCurve
} from './styles'

import ContactLink from '../contact-link'
import Image from '../image'

import saipaLogo from '../../images/home/saipa-logo.png'
import seesaLogo from '../../images/home/seesa-logo.png'
import aboutCurve from '../../images/about/about-top-curve.svg'
import homeCurve from '../../images/home/home-top-curve.svg'

const Banner = ({ title, quote }) => {
  return (
    <Container>
      <TopCurve src={homeCurve} />

      <ContentContainer >
        <Title>
          {title}
        </Title>
        <Quote>
          - {quote} -
        </Quote>
      </ContentContainer>

      <Footer>
        <ContactLink href="tel:+27-58-623-1699">
          Tel: (058) 623 1699
        </ContactLink>

        <Flex flexDirection="column" alignItems="flex-end">
          <SeesaLogo>
            <Text fontSize="xsmall" uppercase weight="bold" mb=".3rem">Member of</Text>
            <Image
              src={seesaLogo}
              width="100%"
              height="100%"
              alt="seesa logo"
              title="seesa logo"
            />
          </SeesaLogo>

          <SaipaLogo>
            <Image
              src={saipaLogo}
              width="100%"
              height="100%"
              alt="SAIPA logo"
              title="SAIPA logo"
            />
          </SaipaLogo>
        </Flex>
      </Footer>

      <BgImage />

      <AboutCurve src={aboutCurve}/>

    </Container>
  )
}

export default Banner