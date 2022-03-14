import React from 'react'

import { useTranslation } from 'next-i18next'

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  Textarea,
  Checkbox,
  Container,
  FormHelperText,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import appsInfo from '@data/apps.json'
import SaneLink from '@components/link'

const SupportForm = (props) => {
  const { t } = useTranslation('common', { keyPrefix: 'support.form' })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async ({ name, email, app, message }) => {
    const formData = {
      name,
      email,
      app,
      messageLines: message.split('\n'),
      '_email.from': 'Transit Support Form',
      '_email.subject': `[Transit] [${app}] New support message`,
    }

    const responseData = await fetch(process.env.NEXT_PUBLIC_FORM_CONTACT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    console.log(responseData)
  }

  const onError = (errors) => {
    console.error(errors)
  }

  return (
    <Container as='form' onSubmit={handleSubmit(onSubmit, onError)} {...props}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>{t('name.label')}</FormLabel>
        <Input
          id='name'
          placeholder={t('name.placeholder')}
          {...register('name', {
            required: t('global.errors.required'),
            minLength: { value: 3, message: t('name.errors.length') },
          })}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor='email'>{t('email.label')}</FormLabel>
        <Input
          id='email'
          placeholder={t('email.placeholder')}
          {...register('email', {
            required: t('global.errors.required'),
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
              message: t('email.errors.valid'),
            },
          })}
        />
        <FormHelperText>This is so that we can get back to you.</FormHelperText>
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.app}>
        <FormLabel htmlFor='app'>{t('app.label')}</FormLabel>
        <Select
          id='app'
          {...register('app', {
            required: t('global.errors.required'),
          })}
        >
          {/* TODO: Add this and validate  */}
          {/* <option selected disabled key="none" value="none">
            Select an app
          </option> */}
          {appsInfo.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{errors.app && errors.app.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message}>
        <FormLabel htmlFor='message'>{t('message.label')}</FormLabel>
        <Textarea
          id='message'
          placeholder={t('message.placeholder')}
          {...register('message', {
            required: t('global.errors.required'),
            minLength: { value: 10, message: t('message.errors.length') },
          })}
        />
        <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.privacy}>
        <Checkbox
          id='privacy'
          placeholder='privacy'
          {...register('privacy', {
            required: t('global.errors.required'),
          })}
        >
          {t('privacy.label')} <SaneLink href='/doc/privacy'>{t('privacy.link')}</SaneLink>
        </Checkbox>
        <FormErrorMessage>{errors.privacy && errors.privacy.message}</FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        colorScheme='purple'
        isLoading={isSubmitting}
        loadingText={t('submit.loading')}
        type='submit'
      >
        {t('submit.normal')}
      </Button>
    </Container>
  )
}

export default SupportForm
