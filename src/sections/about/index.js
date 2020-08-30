import React from 'react'

import { TextContainer, Paragraph, AboutImage, Quote, BgLine } from './styles'

import Section from '../../components/section'
import PageTitle from '../../components/page-title'
import Flex from '../../components/flex'

import { aboutText, quoteText } from './data'

import aboutImage from '../../images/about/about-us.png'
import aboutImage2 from '../../images/about/about-us-2.png'


const About = () => {

  return (
    <Section
      id="about"
      withTopMargin
    > 
      <BgLine />
      <Flex
        maxWidth="1500px"
        flexDirection="column"
        p="2rem 5vw"
        margin="0 auto"
      >

        <PageTitle>About Us</PageTitle>

        <TextContainer>
          <Flex flexDirection="column">
            {aboutText.map(par => (
              <Paragraph
                key={par}
                mt="1em"
              >
                {par}
              </Paragraph>
            ))}
          </Flex>
          <AboutImage src={aboutImage} title="about 1" alt="about 1" />      
        </TextContainer>    

        <TextContainer mt="4rem">
          <AboutImage src={aboutImage2} title="about 2" alt="about 2"/>
          <Flex 
            flexDirection="column" 
            alignItems="flex-end"
            m="0 auto"
          >
            {quoteText.map(par => (
              <Quote key={par} color="primary.main">
                {par}
              </Quote>
            ))}
          </Flex>   
        </TextContainer>     

      </Flex>
    </Section>
  )
}

export default About