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
    <DefaultPage title={`Transit | ${t('title')}`}>
      <Heading.h2>Support</Heading.h2>

      <SupportForm />
    </DefaultPage>
  )
}

export default Home
