import React from 'react'
import axios from 'axios'
import toast from 'just-toasty'
import { useFormik } from 'formik'

import {
  Form,
  SubmitButton,
} from './styles'

import Text from '../../components/text'
import Input from '../../components/input'

import {
  initialValues,
  validationSchema
} from './data'

const MAILER_ROUTE = 'https://virtue-mailer.herokuapp.com/generic'

const ContactForm = () => {

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = {
        ...values,
        to: 'accounts@bellpartners.co.za'
      }

      const res = await axios.post(MAILER_ROUTE, formData)

      if (res.statusText.toLowerCase() !== 'ok') {
        throw new Error(`Invalid response code ${res.status}`)
      }

      toast('Message sent successfully!', 8000)
      resetForm()
    } catch (error) {
      console.error(error)
      toast('Oops! Something went wrong. Please try again or contact us directly.', 8000)
    } finally {
      setSubmitting(false)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  const { 
    values, 
    errors, 
    handleChange,
    dirty,
    isValid,
    isSubmitting
  } = formik

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Text
        color="primary.dark"
        fontSize="xxlarge"
        weight="bold"
        mb="1rem"
      >
        Send us a message
      </Text>

      <Text
        color="primary.dark"
        mb="2rem"
      >
        Please enter your email address, phone number (optional) and message below.
      </Text>

      <Input
        label="Email address"
        type="email"
        name="email"
        maxLength="80"
        onChange={handleChange}
        value={values.email}
        errorText={errors?.email}
        disabled={isSubmitting}
      />

      <Input
        label="Phone number"
        name="phoneNumber"
        onChange={handleChange}
        value={values.phoneNumber}
        maxLength="20"
        errorText={errors?.phoneNumber}
        disabled={isSubmitting}
      />

      <Input
        label="Message"
        as="textarea"
        name="message"
        rows="10"
        maxLength="1000"
        onChange={handleChange}
        value={values.message}
        errorText={errors?.message}
        disabled={isSubmitting}
      />

      <SubmitButton 
        isDisabled={!(dirty && isValid)}
        disabled={isSubmitting}
      >
        <Text color="white" weight="extrabold">
          {isSubmitting ? 'Sending...' : 'SEND'}
        </Text>
      </SubmitButton>
    </Form>
  )
}

export default ContactForm