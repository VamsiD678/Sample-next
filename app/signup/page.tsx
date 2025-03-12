'use client'

// import { useState } from "react"
// import Preview from "../_signup-steps/preview"
// import Step1 from "../_signup-steps/step1"
// import Step2 from "../_signup-steps/step2"
import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik"
import { useState } from "react";
// import { useState } from "react"
import toast from "react-hot-toast"
// import { ResetForm } from '../SignIn/page'
// import toast from 'react-hot-toast'
// import { validationSchema } from '../_signup-steps/Validation_schema'


// export interface FormValues {
//   firstname: string,
//   lastname: string,
//   email: string,
//   phone: string,
//   password: string,
//   confirmPassword: string
// }

// const step = ['details', 'password', 'preview']

// const renderedStepContent = (step:number, values:FormValues) => {
//   switch (step) {
//     case 1:
//       return <Step1 />
//     case 2:
//       return <Step2 />
//     case 3:
//       return <Preview values={values} />
//     case 4:
//       return <p className="text-2xl font-medium text-center mb-9">Thank you, {values.firstname}</p>
//     default:
//       return <div>Not Found</div>
//   }
// }

// const Signup = () => {

//   const [activeStep, setActiveStep] = useState(1)
//   const isLastStep = activeStep === step.length
//   const currentValidationSchema = validationSchema[activeStep-1]

//   const initialValues: FormValues = {
//     firstname: 'Vamsi',
//     lastname: '',
//     email: '',
//     phone:'',
//     password: '',
//     confirmPassword: '',
//   }

//   const handleSubmit = (values: FormValues, { resetForm }: { resetForm: ResetForm }) : void => {
    
//     console.log(values);
    
//     if (isLastStep) {
//       setTimeout(() => {
//         toast.success('Form submission successfull')
//         resetForm()
//         setActiveStep(step=> step+1)
//       }, 1000
//     )
//     }
//     else {
//       setActiveStep(step=> step+1)
//     }
//   };

//   const handlePrevious = () => {
//     setActiveStep(step=> step-1)
//   }
   
//   return (
//     <div className="p-[30px] sm:p-12 max-w-xl flex flex-col items-center mx-auto">
//       <h1 className="text-3xl mb-6">Sign up</h1>
//       <div className="w-full">
//         <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={currentValidationSchema}>

//           {({ handleSubmit, values }) => (
//             <Form onSubmit={handleSubmit}>

//               {renderedStepContent(activeStep,values)}
//               {
//                 !isLastStep+1 ?
              
//                 <div className="flex items-center justify-center mt-5">
//                   {
//                     activeStep !== 1 ? (
//                       <div className="flex gap-4">
//                         <div>
//                           <button className="button-secondary" type="button" onClick={handlePrevious}>Previous</button>
//                         </div>
//                         <div>
//                           <button className="button-secondary" type="submit">{ isLastStep ? 'Create account' : 'Continue'}</button>
//                         </div>
//                       </div>
//                     )
//                       :
//                       <div>
//                         <button className="button-secondary" type='submit'>Continue</button>
//                       </div>
//                   }
//                 </div> : <p>Back</p>
//               }
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   )
// }

// export default Signup;


//  SOURCE DETAILS

 import * as Yup from "yup";

interface FormValues {
  sourceType: string;
  referralEmployeeId?: string;
  referralName?: string;
  otherSourceDetails?: string;
  jobPortal?: string;
  campusName?: string;
}

const validationSchema = Yup.object().shape({
  sourceType: Yup.string().required("Source Type is required"),
  referralEmployeeId: Yup.string().when("sourceType", {
    is: "Employee Referral",
    then: (schema) => schema.required("Employee ID is required"),
  }),
  referralName: Yup.string().when("sourceType", {
    is: "Employee Referral",
    then: (schema) => schema.required("Referral Name is required"),
  }),
  otherSourceDetails: Yup.string().when("sourceType", {
    is: "Other",
    then: (schema) => schema.required("Please provide source details"),
  }),
  campusName: Yup.string().when("sourceType", {
    is: 'Campus Hiring',
    then: (schema)=> schema.required('Name of campus is required')
  }),
  jobPortal: Yup.string().when('sourceType', {
    is: 'Job Portal',
    then: (schema) => schema.required('Specify Job Portal')
  })
});

export default function SourceDetailsForm() {
  const [sourceType, setSourceType] = useState("");

  return (
    <Formik<FormValues>
      initialValues={{
        sourceType: "",
        referralEmployeeId: "",
        referralName: "",
        otherSourceDetails: "",
        jobPortal:""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        setTimeout(() => {
          resetForm()
          setSourceType("")
          toast.success('Source data submitted', {
            style: {
              fontSize: '18px',
              padding:'16px'
            }
          })
        }, 1000
        )
      }}
    >
      {({values, handleChange, handleBlur ,resetForm, getFieldProps }) => (
        <Form className="mt-12 p-6 space-y-5 max-w-lg mx-auto border rounded-lg shadow bg-white">
          <h2 className="text-xl text-center font-semibold">Application Source Details</h2>

          {/* Source Type */}
          <div>
            <label className="block font-semibold">Source Type:</label>
            {/* <Field
              as="select"
              name="sourceType"
              className="w-full p-2 border rounded"
              onChange={(e: any) => {
                resetForm()
                handleChange(e);
                setSourceType(e.target.value);
              }}
            > */}
            <select className="w-full p-2 border rounded" id="sourceType" {...getFieldProps('sourceType')} onChange={(e) => {
              resetForm()
              setSourceType(e.target.value)
              handleChange(e)
            }}>
              <option value="">Select Source</option>
              <option value="Employee Referral">Employee Referral</option>
              <option value="Campus Hiring">Campus Hiring</option>
              <option value="Job Portal">Job Portal</option>
              <option value="Other">Other</option>
            </select>  
              {/* </Field> */}
            <ErrorMessage name="sourceType" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Employee Referral Fields */}
          {sourceType === "Employee Referral" && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">Referral Employee ID:</label>
                <Field
                  name="referralEmployeeId"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="referralEmployeeId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold">Referral Name:</label>
                <Field name="referralName" className="w-full p-2 border rounded" />
                <ErrorMessage
                  name="referralName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          )}

          {/* Campus Hiring */}
          {
            sourceType === "Campus Hiring" && (
              <div className="space-y-4">
                <div>
                  <label className="font-semibold block">Name of campus:</label>
                  <Field name='campusName' className='w-full border rounded py-2 px-3' />
                  <ErrorMessage name="campusName" component='div' className="text-red-500 text-sm" />
                </div>
              </div>
            )
          }

          {/*  Job Portal  */}

          {
            sourceType === 'Job Portal' && (
              <div className="space-y-4">
                <div>
                  <label className="font-semibold block">Job Portal</label>
                  <Field as='select' name='jobPortal' className='w-full border rounded py-2 px-3'>
                    <option value=''>Select</option>
                    <option value='LinkedIn'>LinkedIn</option>
                    <option value='Naukri'>Naukri</option>
                    <option value='Indeed'>Indeed</option>
                    <option value='Glass Door'>Glass Door</option>
                    <option value='Shine'>Shine</option>
                  </Field>
                </div>
              </div>
            )
          }

          {/* Other Source Details */}
          {sourceType === "Other" && (
            <div>
              <label className="block font-semibold">Other Source Details:</label>
              <Field
                name="otherSourceDetails"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="otherSourceDetails"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 duration-300 text-white p-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}


//  FIELD ARRAY - Manages dynamic form fields, By adding and removing the inputs dynamically,
//  Particularly dealing with array of objects in forms.
// import * as Yup from 'yup'

// interface Friend {
//   name: string
//   degree: string
//   branch: string
//   passedOutYear: string
// }

// interface FormValues {
//   education: Friend[]
// }

// const DynamicField = () => {

//   const initialValues: FormValues = {
//     education: [{name:'', degree:'', branch:'', passedOutYear:''}]
//   }

//   const validationSchema = Yup.object({
//     education: Yup.array().of(
//       Yup.object({
//         name: Yup.string().required('Name is required'),
//         degree: Yup.string().required('Degree is required'),
//         branch: Yup.string().required('Branch is required'),
//         passedOutYear: Yup.string().required('Passed out year is required')
//       })
//     ).min(1, "Atleast one section is required")
//   })

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values,{ resetForm }) => {
//       console.log(values.education)
//         setTimeout(() => { 
//           toast.success(`Education details submitted`, {
//             style: {
//                 fontSize: '18px',
//                 padding: '16px'
//               }
//             })
//             resetForm()
//           }, 1000
//         )}
//    }>
//       {({ values, errors, touched }) => (
//         <Form className="py-12 px-9 max-w-xl mx-auto flex flex-col items-center text-lg">
//           <h1 className="mb-5 text-3xl">Education details</h1>
//           <FieldArray name="education">
//             {({ push, remove }) => {
//               const canAddMore = () => {
//                 const lastIndex = values.education.length - 1;
//                 const lastEducation = values.education[lastIndex];
//                 const lastError = errors.education?.[lastIndex];
//                 const lastTouched = touched.education?.[lastIndex];

//                 return lastEducation?.name && lastTouched?.name && !lastError;
//               };
             
//               return (
//                 <div className="flex flex-col gap-5 w-full">
//                   {values.education.map((_, i) => (
//                     <div key={i} className="flex flex-col gap-4 items-center">
//                       <div className="flex flex-col self-start w-full">
//                         <Field name={`education[${i}].name`} className='w-full border rounded p-2 px-3'  placeholder="College name" />
//                         <ErrorMessage name={`education[${i}].name`} component='div' className="text-base text-red-500 block w-full ml-2" />
//                       </div>
//                       <div className="flex flex-col self-start w-full">
//                         <Field name={`education[${i}].degree`} className='w-full border rounded p-2 px-3' placeholder="Degree" />
//                         <ErrorMessage name={`education[${i}].degree`} component='div' className="text-base text-red-500 block ml-2" />
//                       </div>
//                       <div className="flex flex-col self-start w-full">
//                         <Field name={`education[${i}].branch`} className='w-full border rounded p-2 px-3' placeholder="Branch" />
//                         <ErrorMessage name={`education[${i}].branch`} component='div' className="text-base text-red-500 block ml-2" />
//                       </div>
//                       <div className="flex flex-col self-start w-full">
//                         <Field name={`education[${i}].passedOutYear`} className='w-full border rounded p-2 px-3' placeholder="Passed out year" />
//                         <ErrorMessage name={`education[${i}].passedOutYear`} component='div' className="text-base text-red-500 block ml-2" />
//                       </div>
//                       {
//                         values.education?.length !== 1  ? <button type="button" className="self-center p-2 px-3 rounded-md bg-gray-200" onClick={() => remove(i)}>Remove</button> : ''
//                       }
//                     </div>
//                   ))}
//                   <div className="flex items-center justify-center gap-10 mt-2 max-w-xl mx-auto w-full">
//                     <button type="button" className="button-secondary cursor-pointer" disabled={!canAddMore()} onClick={() => push({ name: '', degree: '', branch: '', passedOutYear: '' })}>Add More</button>
//                     <button type='submit' className="button-primary cursor-pointer px-6">Submit</button>
//                   </div>
//                 </div>
//               )
//             }}
//           </FieldArray>
//         </Form>
//       )}
//     </Formik>
//   )

// }

// export default DynamicField 