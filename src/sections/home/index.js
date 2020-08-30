import React from 'react'

import Section from '../../components/section'
import Banner from '../../components/banner'
import Flex from '../../components/flex'

const Home = props => {

  return (
    <Section
      flexDirection="column"
      mt="15rem" 
      minHeight="calc(100vh - 15rem)"
      {...props}
    >
      <Flex 
        id="home"
        position="absolute"
        top="-15rem"
      />
      <Banner
        title="Accounting is the language of business"
        quote="Warren Buffet"
      />
    </Section>
  )
}

export default Home