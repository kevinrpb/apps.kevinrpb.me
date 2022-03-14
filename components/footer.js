import React from 'react'

import { useTranslation } from 'next-i18next'

import { Flex, Text } from '@chakra-ui/react'
import SaneLink from '@components/link'

const Footer = () => {
  const { t } = useTranslation('common', { keyPrefix: 'footer' })

  const supportLabel = t('support')
  const privacyDocLabel = t('privacy-doc')
  const makerLabel = t('maker')

  return (
    <Flex as="footer" direction="row" justify="space-between">
      <Flex as="nav" direction="column" justify="end">
        <SaneLink href="/support">{supportLabel}</SaneLink>
        <SaneLink href="/doc/privacy">{privacyDocLabel}</SaneLink>
      </Flex>

      <Flex as="nav" direction="column" justify="end">
        <Text>
          {makerLabel}{' '}
          <SaneLink href="https://kevinrpb.me">kevinrpb</SaneLink>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Footer
