import * as React from "react";
import './App.css'; 
import { MyForm } from "./components/MyForm";
import  ResponsiveAppBar from "./components/AppBar"; 

const App = () => { 
  return (
    <div style={{textAlign:"center"}}>
    <ResponsiveAppBar /> 
    <MyForm onSubmit={({email, firstName, lastName, phoneNumber}) => { 
    console.log(email, firstName, lastName, phoneNumber)
    }}
    /> 
    </div>
  );
}

export default App;
