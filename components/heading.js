import React from 'react'

import { Heading } from '@chakra-ui/react'

const buildHeading = (element) => {
  const HeadingComponent = (props) => (
    <Heading as={element} {...props}>
      {props.children}
    </Heading>
  )

  return HeadingComponent
}

export const h1 = buildHeading('h1')
export const h2 = buildHeading('h2')
export const h3 = buildHeading('h3')
export const h4 = buildHeading('h4')
export const h5 = buildHeading('h5')
export const h6 = buildHeading('h6')

export default { h1, h2, h3, h4, h5, h6 }
