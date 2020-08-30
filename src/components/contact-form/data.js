import { object, string } from 'yup'

export const validationSchema = object().shape({
  email: string()
    .email('Invalid email')
    .max(80, 'Too Long!')
    .required('Required'),
  phoneNumber: string()
    .max(20, 'Too Long!'),
  message: string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
})

export const initialValues = {
  email: '',
  phoneNumber: '',
  message: ''
}