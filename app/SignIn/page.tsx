'use client'
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import toast from "react-hot-toast";
import { setterOpen } from "../_components/Product";

export type ResetForm = (e?: void) => void

export interface FormValues {
  name: string;
  email: string;
  password: string;
}

const MyForm = () => {

  const initialValues: FormValues = {
    name: '',
    email: "",
    password: "",
  };

  // const validate = (values: FormValues) => {

  //   const errors: Partial<FormValues> = {};

  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Invalid email format";
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password must be at least 6 characters";
  //   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
  //     errors.password = "Password must contain alphabets & digits"
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object().shape(
    {
      name: Yup.string()
      .min(3, 'Minimum 3 Characters')
      .max(20, 'Maximum 20 Characters')
      .required('This field is required'),

      email: Yup.string()
      .email('Invalid Email address')
      .required('This field is required'),
      
      password: Yup.string()
      .required('This field is required')
      .min(8, 'Password must have 8 characters')
    })  

  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: { setSubmitting: setterOpen, resetForm: ResetForm }) : void => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false)
      toast.success('Form submission successfull')
      resetForm()
      }, 1000
    )
  };

  return (
    <section className="py-12 px-9">
      <Formik enableReinitialize={false} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, values, handleChange }) => (
        <Form className="flex flex-col gap-4 py-6 px-6 border-2 rounded-md max-w-md mx-auto">
          <h2 className="text-3xl text-center mb-2">Sign In</h2>  
          <div>
            <TextField type='text' name="name" value={values.name} onChange={handleChange} disabled={isSubmitting} className="w-full" id="name" label="Name" variant="outlined" />
            <ErrorMessage name="name" id="name" component="span" className="text-red-500 text-sm" />
          </div>

          <div>
            <TextField type='email' name="email" value={values.email} onChange={handleChange} disabled={isSubmitting} className="w-full" id="email" label="Email" variant="outlined" /> 
            <ErrorMessage name="email" id="email" component="span" className="text-red-500 text-sm" />
          </div>

          <div>
            {/* <Field type="password" id="password" name="password" className=" tracking-wide border border-[#bcc0c5] rounded-[0.25rem] p-4 px-3 w-full outline-1 outline-blue-500" placeholder='Password' /> */}
            <TextField type='password' name="password" value={values.password} onChange={handleChange} disabled={isSubmitting} className="w-full" id="password" label="Password" variant="outlined" /> 
            <ErrorMessage name="password" id="password" component="span" className="text-red-500 text-sm" />
          </div>

            <button type="submit" disabled={isSubmitting} className={`mt-3 mb-2 text-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-4 py-2 rounded`}>
            {isSubmitting ? 'Submitting':'Submit'}
          </button>
        </Form>
      )}
    </Formik>
    </section>
  );
};

export default MyForm;