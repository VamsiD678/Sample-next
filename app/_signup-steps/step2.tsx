import MyTextField from "../_components/TextField";

const Step2 = () => {
  

  return (
    <div className="flex flex-col gap-4">
     <MyTextField name="password" type="password" label="Password" />
     <MyTextField name="confirmPassword" type="password" label="Confirm Password" />
    </div>
  )
}

export default Step2;