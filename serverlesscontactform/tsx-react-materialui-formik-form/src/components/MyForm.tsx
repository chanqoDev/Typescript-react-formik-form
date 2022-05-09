import * as React from 'react'; 
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { TextField } from "@material-ui/core"; 
import { Button } from '@mui/material';

interface Values {
  firstName: string,
  lastName: string,
  email: string, 
  phoneNumber: string
}

interface Props {
  onSubmit: (values: Values) => void; 
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
return (<Formik initialValues={{firstName: '', lastName: '', email: '', phoneNumber: ''}} 
onSubmit={(values) => {
  onSubmit(values)
}}
>
  {({values, handleChange }) => (
  <Form> 
    <div>
    <TextField 
    name="firstName" 
    placeholder="first name"
    value={values.firstName}
    onChange={handleChange}
    />
    </div>
    <div>
     <TextField 
    name="lastName" 
    placeholder="last name"
    value={values.lastName}
    onChange={handleChange}
    />
    </div>
    <div>
     <TextField 
    name="email" 
    placeholder="email"
    value={values.email}
    onChange={handleChange}

    />
    </div>
    <Button type="submit" variant="outlined">Submit</Button>
    <pre> {JSON.stringify(values, null, 2)}</pre>
    </Form>
  )}
  </Formik>
)
};
