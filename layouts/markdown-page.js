import React from 'react'

import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'

import getComponent from '@lib/md'

const MarkdownPage = ({ document }) => {
  const { meta, component } = getComponent(document)
  const { title } = meta

  return (
    <>
      <Head>
        <title>{`Kevin's Apps | ${title}`}</title>
      </Head>

      <Container flex="1" maxW='container.lg'>
        <Flex as='main' direction='column' flex='1'>
          <article> {component} </article>
        </Flex>
      </Container>
    </>
  )
}

export default MarkdownPage
