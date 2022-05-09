import * as React from "react";
import './App.css'; 
import { MyForm } from "./components/MyForm";

const App = () => { 
  return (
    <div style={{textAlign:"center"}}>
    <MyForm onSubmit={({email, firstName, lastName, phoneNumber}) => { 
    console.log(email, firstName, lastName, phoneNumber)
    }}
    /> 
    </div>
  );
}

export default App;
