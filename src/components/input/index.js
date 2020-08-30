import React from 'react'

import Text from '../text'
import Flex from '../flex'

import { StyledInput } from './styles'

const Input = ({
  label, 
  name, 
  placeholder, 
  errorText,
  ...otherProps
}) => {

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
      >
        {label && (
          <Text
            htmlFor={name}
            as="label"
            mt=".5rem"
            uppercase
            fontSize="small"
            weight="bold"
            color="secondary.dark"
          >
            {label}
          </Text>
        )}

        {errorText && (
          <Text
            fontSize="small"
            color="red"
            weight="bold"
            italic
            mt=".5em"
          >
            {errorText}
          </Text>
        )}
      </Flex>

      <StyledInput 
        id={name}
        name={name}
        placeholder={placeholder || label} 
        {...otherProps} 
      />
    </Flex>  
  )
}

export default Input