
import { Formik, Field, ErrorMessage } from "formik";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  const validate = (values: FormValues) => {

    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <form className="flex flex-col gap-4 p-4 border rounded-md max-w-md mx-auto">
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" className="border p-2 w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 rounded">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;