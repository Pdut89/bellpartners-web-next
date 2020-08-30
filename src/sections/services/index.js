import React from 'react'

import { 
  TopCurve, 
  ListContainer, 
  CategoryImage, 
  List, 
  ListItem,
  Subtitle,
  Pointer
} from './styles'

import Section from '../../components/section'
import PageTitle from '../../components/page-title'
import Flex from '../../components/flex'

import topCurve from '../../images/services/services-top-curve.svg'
import taxesImage from '../../images/services/taxes.png'
import businessImage from '../../images/services/business.png'
import accountingImage from '../../images/services/accounting.png'
import otherImage from '../../images/services/other.png'

import { services } from './data'

const servicesArr = [
  {
    title: 'Accounting',
    services: services.accounting,
    image: accountingImage
  },
  {
    title: 'Business Services',
    services: services.business,
    image: businessImage
  },
  {
    title: 'Taxes',
    services: services.tax,
    image: taxesImage
  },
  {
    title: 'Other Services',
    services: services.other,
    image: otherImage
  },
]

const Services = () => {

  const renderService = ({ title, services: s, image}, i) => (
    <ListContainer key={title} reverse={i % 2 === 0}>
      <CategoryImage src={image} />
      <Flex flexDirection="column">
        <Subtitle>{title}</Subtitle>

        <List>
          {s.map(li => (
            <ListItem key={li}>
              <Pointer />
              {li}
            </ListItem>
          ))}
        </List>

      </Flex>
    </ListContainer>
  )

  return (
    <Section
      id="services"
      withTopMargin
      bg="#f9f9f9"
    >   
      <TopCurve src={topCurve} />
      <Flex
        width="100%"
        m="0 auto"
        maxWidth="1800px"
        flexDirection="column"
        p="2rem 5vw"
      >
        <PageTitle>
          Services we provide
        </PageTitle>
        {servicesArr.map(renderService)}
      </Flex>    
    </Section>
  )
}

export default Services