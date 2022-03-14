import React from 'react'

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import Header from '@components/header'
import Footer from '@components/footer'

import theme from '@themes/default'

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Header />

      {children}

      <Footer />
    </ChakraProvider>
  )
}

export default Layout
