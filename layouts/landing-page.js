import React from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import { Container, Flex } from '@chakra-ui/react'

import SaneLink from '@components/link'

const LandingPage = ({ title, imgSrc, imgAlt, storeHref, children }) => {
  const { locale } = useRouter()
  const buttonSrc = `/img/store/${locale}.store.button.svg`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Flex as='aside' className='landing' direction='column' flex='1'>
        <Image src={imgSrc} alt={imgAlt} width='1920px' height='700px' priority='true' />

        {storeHref && (
          <SaneLink href={storeHref} className='store'>
            <Image src={buttonSrc} alt={imgAlt} width='160px' height='54px' />
          </SaneLink>
        )}
      </Flex>

      <Container flex="1" maxW='container.lg'>
        <Flex as='main' direction='column' flex='1' no-margin='true'>
          {children}
        </Flex>
      </Container>
    </>
  )
}

export default LandingPage
