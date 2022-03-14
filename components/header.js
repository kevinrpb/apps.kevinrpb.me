import React from 'react'

import { useTranslation } from 'next-i18next'

import { Flex, Image, Text } from '@chakra-ui/react'
import Heading from '@components/heading'
import SaneLink from '@components/link'

const Header = () => {
  const { t } = useTranslation('common', { keyPrefix: 'header' })

  const nav = t('nav', { returnObjects: true })
  const navComponents = nav.map(({ label, href, icon }) => (
    <Flex
      as={SaneLink}
      justify='center'
      align='center'
      href={href}
      variant='nav-link'
      key={encodeURI(href)}
    >
      <Image src={icon} alt='' />
      <Text color='primary'>{label}</Text>
    </Flex>
  ))

  return (
    <Flex as='header' justifyContent='space-between' alignItems='center'>
      {/* HACK: The fontSize doesn't work when used in the theme file :( */}
      <Heading.h1 fontSize='xl'>
        <SaneLink href='/'>Kevin&apos;s Apps</SaneLink>
      </Heading.h1>

      <Flex as='nav'> {navComponents} </Flex>
    </Flex>
  )
}

export default Header
