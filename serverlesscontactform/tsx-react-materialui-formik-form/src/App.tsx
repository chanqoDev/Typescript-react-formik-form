import * as React from "react";
import './App.css'; 
import Button  from '@mui/material/Button'; 
import { MyForm } from "./components/MyForm";
 

const App = () => { 
  return (
    <div style={{textAlign:"center"}}>
    <Button variant="outlined"> Submit </Button> 
    <MyForm onSubmit={() => {}} /> 
    </div>
  );
}

export default App;
