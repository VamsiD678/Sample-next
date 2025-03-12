import MyTextField from "../_components/TextField";


const Step1 = () => {  

  return (
      <div className="flex flex-col gap">
        <MyTextField name="firstname" type="text" id='firstname' label="First Name" />
        <MyTextField name="lastname" type="text" id='lastname' label="Last Name" />
        <MyTextField name="email" type="email" id='email' label="Email" />
        <MyTextField name="phone" type="phone" id='phone' label="Phone" />
      </div>

  )
}

export default Step1;