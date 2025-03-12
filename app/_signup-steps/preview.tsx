import { FormValues } from '../signup/page'


const Preview = ({ values }: { values: FormValues }) => {
  
  console.log(values);
  
  return (
    <div className="flex flex-col items-center justify-between gap-8 mb-10">    
      <h2 className="text-2xl mb-2 font-medium">Confirm sign up details</h2>
  
      <PreviewField fieldValue={values.firstname}>First name</PreviewField>
      <PreviewField fieldValue={values.lastname}>Last name</PreviewField>
      <PreviewField fieldValue={values.email}>Email</PreviewField>
      <PreviewField fieldValue={values.phone}>Phone number</PreviewField>
      
      {/* <div className="flex items-center justify-between w-full text-xl">
        <p>First name</p>
        <p>{values.firstname}</p>
      </div>
      <div className="flex items-center justify-between w-full text-xl">
        <p>Last name</p>
        <p>{values.lastname}</p>
      </div>
      <div className="flex items-center justify-between w-full text-xl">
        <p>Email</p>
        <p>{values.email}</p>
      </div>
      <div className="flex items-center justify-between w-full text-xl">
        <p>Phone number</p>
        <p>{values.phone}</p>
      </div> */}
    </div>
  )
}

const PreviewField = ({ children, fieldValue }: { children:string, fieldValue:string }) => {
  return (
    <div className="flex items-center justify-between w-full text-xl">
      <p>{children}</p>
      <p>{fieldValue}</p>
    </div>
  )
}

export default Preview;