import React from 'react'

import { Heading } from '@chakra-ui/react'

const buildHeading = (element, size) => {
  const HeadingComponent = (props) => (
    <Heading as={element} size={size} {...props}>
      {props.children}
    </Heading>
  )

  return HeadingComponent
}

export const h1 = buildHeading('h1', '2xl')
export const h2 = buildHeading('h2', 'xl')
export const h3 = buildHeading('h3', 'lg')
export const h4 = buildHeading('h4', 'md')
export const h5 = buildHeading('h5', 'sm')
export const h6 = buildHeading('h6', 'xs')

export default { h1, h2, h3, h4, h5, h6 }
