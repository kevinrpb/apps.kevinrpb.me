import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import DefaultPage from '@layouts/default-page'
import Heading from '@components/heading'
import SupportForm from '@components/support-form'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Home = () => {
  const { t } = useTranslation('common', { keyPrefix: 'support' })

  return (
    <DefaultPage title={`Kevin's Apps | ${t('title')}`}>
      <Heading.h1>Support</Heading.h1>

      <SupportForm marginTop='2rem' />
    </DefaultPage>
  )
}

export default Home
