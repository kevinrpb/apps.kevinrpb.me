import React from 'react'

import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

const DefaultPage = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Flex as="main" direction="column" flex="1">
      {children}
    </Flex>
  </>
)

export default DefaultPage
