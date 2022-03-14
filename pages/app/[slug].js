import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Heading } from '@chakra-ui/react'

import { i18n } from '@/next-i18next.config.js'
import LandingPage from '@layouts/landing-page'

export async function getStaticPaths() {
  const { locales } = i18n
  const apps = ['cerc', 'addite']

  const paths = locales.flatMap((locale) => {
    return apps.map((path) => ({
      params: { slug: path },
      locale
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

  return (
    <LandingPage
      title={`Transit | ${t('title')}`}
      imgSrc={t('landingImg')}
      imgAlt={t('landingAlt')}
      storeHref={t('storeURL')}
    >
      <Heading as='h2'>{t('title')}</Heading>
    </LandingPage>
  )
}

export default AppPage
