import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import LandingPage from '@layouts/landing-page'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Home = () => {
  const { t } = useTranslation('common', { keyPrefix: 'index' })

  return (
    <LandingPage
      title="Kevin's Apps"
      imgSrc={t('landingImg')}
      imgAlt={t('landingAlt')}
    ></LandingPage>
  )
}

export default Home
