import * as React from "react"; 
import { FieldProps } from "formik"; 
import { TextField } from "@material-ui/core"; 
import { TextFieldProps } from "@material-ui/core/TextField"; 



export const MyField : React.FC<FieldProps & TextFieldProps> = ({
    label,
    field,
    placeholder
}) => {
    
return(  <TextField label={placeholder} {...field} />); 
}