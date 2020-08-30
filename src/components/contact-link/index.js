import React from 'react'

import { Link } from './styles'

const ContactLink = ({children, ...otherProps}) => {
  return (
    <a {...otherProps}>
      <Link>
        {children}
      </Link>
    </a>
  )
}

export default ContactLink