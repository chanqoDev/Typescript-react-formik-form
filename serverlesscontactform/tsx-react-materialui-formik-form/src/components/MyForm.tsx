import * as React from 'react'; 
import { Formik, Field, Form } from 'formik';
// import { TextField } from "@material-ui/core"; 
import { Button } from '@mui/material';
import { MyField } from './MyField';

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
  {({values }) => (
    
  <Form> 
    <div>
    <Field label="First Name" name="firstName" placeholder="First name" component={MyField} /> 
     </div>
    <div>
     <Field label="Last Name" name="lastName" placeholder="Last Name" component={MyField} />
    </div>
    <div>
     <Field label="Email" name="email" placeholder="Email" component={MyField} />
    </div>
    <Button type="submit" variant="outlined">Submit</Button>
    <pre> {JSON.stringify(values, null, 2)}</pre>
    </Form>
  )}
  </Formik>
)
};
