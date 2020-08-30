import React from 'react'

import {
  TopCurve,
  ContactContainer,
  Subtitle,
  ContactLink,
  DetailsContainer,
  SealLink
} from './styles'

import Section from '../../components/section'
import PageTitle from '../../components/page-title'
import Flex from '../../components/flex'
import Text from '../../components/text'
import ContactForm from '../../components/contact-form'

import topCurve from '../../images/services/services-bottom-curve.svg'

import { contactPersons } from './data'

const Contact = () => {

  const renderContactPerson = ({name, position, bcompt, email, seal}, i) => (
    <Flex key={name} flexDirection="column" mt={i === 0 ? '0' : '2rem'}>
      <Text 
        weight="extrabold" 
        color="primary.dark"
      >
        {name}
      </Text>

      <Text 
        mt=".2rem" 
        color="secondary.main" 
        italic
        fontSize="small"
      >
        {position}
      </Text>

      {bcompt && (
        <Text
          mt=".2rem"
          color="secondary.main"
          italic
          fontSize="small"
        >
          {bcompt}
        </Text>
      )}

      <ContactLink 
        mt=".5rem"
        href={`mailto: ${email}`}
      >
        {email}
      </ContactLink>

      {seal && ( 
        <SealLink href={seal} target="_blank">
          Click here to view SAIPA seal
        </SealLink>
      )}
    </Flex>
  )

  const renderContactDetails = () => (
    <DetailsContainer>
      <Subtitle>
        Contact Persons
      </Subtitle>
      <Flex as="ul" flexDirection="column" mt="2rem">
        {contactPersons.map(renderContactPerson)}
      </Flex>

      <Subtitle mt="3rem">
        Office phone
      </Subtitle>
      <ContactLink
        mt="2rem"
        href="tel:+27-58-623-1699"
      >
        <Text fontSize="large">
          Tel: (058) 623 1699 / 1121
        </Text>
      </ContactLink>
      <Text mt=".5rem" fontSize="large">
        Fax: (058) 623 1906
      </Text>

      <Subtitle mt="3rem">
        Address and Hours
      </Subtitle>
      <Text mt="2rem">
        33 Murray St, PO Box 348, Harrismith, 9880
      </Text>
      <Text mt="1rem">
        Monday-Thursday:
        <Text
          as="span"
          ml=".5rem"
          weight="bold"
        >
          8am to 5pm
        </Text>
      </Text>
      <Text mt="1rem">
        Friday:
        <Text
          as="span"
          ml=".5rem"
          weight="bold"
        >
          8am to 1pm
        </Text>
      </Text>
    </DetailsContainer>
  )

  return (
    <Section
      id="contact"
      withTopMargin
    >
      <TopCurve src={topCurve}/>
      <Flex
        width="100%"
        m="0 auto"
        maxWidth="1800px"
        flexDirection="column"
        p="2rem 5vw"
      >
        <PageTitle>
          Contact us
        </PageTitle>

        <ContactContainer>
          {renderContactDetails()}

          <ContactForm />

        </ContactContainer>    
      </Flex>
    </Section>
  )
}

export default Contact