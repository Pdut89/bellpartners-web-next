import React from 'react'
import Flex from '../flex'
import Text from '../text'

const Footer = () => {

  return (
    <Flex 
      flexDirection="column"
      alignItems="center"
      p="2rem 0 4rem"
    > 
      {['Bell Partners (Pty) Ltd', 'Co Reg No: 2018/084198/07'].map(text => (
        <Text
          key={text}
          color="primary.main"
          fontSize="small"
          uppercase
          weight="extrabold"
          mt=".5rem"
        >
          {text}
        </Text>
      ))}
      
    </Flex>
  )
}

export default Footer