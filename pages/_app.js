/* eslint-disable react/prop-types */
import React from 'react'

import { appWithTranslation } from 'next-i18next'

import Layout from '@layouts/base'

import '@styles/main.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(MyApp)
