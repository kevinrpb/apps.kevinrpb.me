import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import DefaultPage from '@layouts/default-page'
import heading from '@components/heading'
import SaneLink from '@components/link'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Error404Page = () => {
  const { t } = useTranslation('common', { keyPrefix: 'error' })

  return (
    <DefaultPage title='Transit | 404'>
      <heading.h2>{t('404.h2')}</heading.h2>

      <p>{t('404.text')}</p>

      <ul>
        <li>
          <SaneLink href='/'>{t('backText')}</SaneLink>
          <SaneLink href='/'>{t('homeText')}</SaneLink>
        </li>
      </ul>
    </DefaultPage>
  )
}

export default Error404Page
