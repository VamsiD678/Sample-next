import * as Yup from 'yup'

export const validationSchema = [
  Yup.object().shape(
  {
    firstname: Yup.string()
      .min(3, 'Min 3 characters')
      .required('This field is required'),
    lastname: Yup.string()
      .min(2, 'Min 2 charcters')
      .required('This field is required'),
    email: Yup.string()
      .email("Invalid email address")
      .required('This field is required'),
    phone: Yup.string()
      .min(10, "Invalid Phone number")
      .max(11, "Invalid Phone number")
      .required('This field is required'),
  }
  ),

  Yup.object().shape(
    {
      password: Yup.string()
      .min(8, 'Min 8 characters')
      .required('This field is required'),
      confirmPassword: Yup.string()
      .required('This field is required')
      .when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ), 
    }
  )
]