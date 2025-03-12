import { TextField } from "@mui/material";
import { useField } from "formik";


const MyTextField = ({ ...props }) => {

  const [field, meta] = useField(props);
  
  return (
    <div className="mb-5" >
      <TextField {...field} {...props} value={field.value} className="w-full tracking-[0.015rem] text-lg"/>
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextField;