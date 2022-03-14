import React from 'react'

import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const SaneLink = (props) =>
  // If the link is local it will start with a '/' or '#'
  // Otherwise it'll be something like 'https://'
  props.href.startsWith('/') || props.href.startsWith('#') || props.href === '' ? (
    <NextLink href={props.href} passHref={props.passHref}>
      <Link {...props}> {props.children} </Link>
    </NextLink>
  ) : (
    <Link
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {props.children}
    </Link>
  )

export default SaneLink
