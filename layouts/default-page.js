import React from 'react'

import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'

const DefaultPage = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Container flex="1" maxW='container.lg'>
      <Flex as="main" direction="column" flex="1">
        {children}
      </Flex>
    </Container>
  </>
)

export default DefaultPage
