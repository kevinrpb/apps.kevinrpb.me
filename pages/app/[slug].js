import React from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Container, Flex, Spacer } from '@chakra-ui/react'

import { i18n } from '@/next-i18next.config.js'
import DefaultPage from '@layouts/default-page'

import appsInfo from '@data/apps.json'
import SaneLink from '@components/link'
import Heading from '@components/heading'

export async function getStaticPaths() {
  const { locales } = i18n
  const apps = appsInfo.map(({ value }) => value)

  const paths = locales.flatMap((locale) => {
    return apps.map((path) => ({
      params: { slug: path },
      locale,
    }))
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  const app = params.slug

  return {
    props: {
      app,
      ...(await serverSideTranslations(locale, ['common', app])),
    },
  }
}

const AppPage = ({ app }) => {
  const { t } = useTranslation(app)
  const { locale } = useRouter()

  const storeHref = t('storeURL')
  const buttonSrc = `/img/store/${locale}.store.button.svg`
  const iconSrc = `/img/icons/${app}-1024.png`

  const AppCard = () => (
    <Container
      maxW='container.sm'
      // border='1px solid'
      borderColor='gray.300'
      padding='1rem'
      borderRadius={`${(10 / 57) * 5}em`}
      boxShadow='0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    >
      <Flex direction={{ base: 'column', sm: 'row' }} alignItems='center' justifyContent='center'>
        <Image src={iconSrc} width='96px' height='96px' />

        <Heading.h1 marginLeft={{ base: '0', sm: '1rem' }}>
          {t('title')}
        </Heading.h1>

        <Spacer display={{ base: 'none', sm: 'block' }} />

        <SaneLink href={storeHref} className='store'>
          <Image src={buttonSrc} width='160px' height='54px' />
        </SaneLink>
      </Flex>
    </Container>
  )

  return (
    <DefaultPage title={`Kevin's Apps | ${t('title')}`}>
      <AppCard />
    </DefaultPage>
  )
}

export default AppPage
