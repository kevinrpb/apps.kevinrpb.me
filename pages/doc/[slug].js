import fs from 'fs'
import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { i18n } from '@/next-i18next.config.js'
import MarkdownPage from '@layouts/markdown-page'

export async function getStaticPaths() {
  const { locales } = i18n
  const documents = await fs.promises.readdir('documents/')

  const paths = locales.flatMap((locale) => {
    return documents.map((path) => ({
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
  const document = await fs.promises.readFile(`documents/${params.slug}/${locale}.md`, 'utf8')

  return {
    props: {
      document,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const DocumentPage = ({ document }) => {
  return <MarkdownPage document={document} />
}

export default DocumentPage
