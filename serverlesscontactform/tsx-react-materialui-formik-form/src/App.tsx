import * as React from "react";
import './App.css'; 
import { MyForm } from "./components/MyForm";
import  ResponsiveAppBar from "./components/AppBar"; 
import CardAlbum from "./components/CardAlbum";

const App = () => { 
  return (
    <div style={{textAlign:"center"}}>
    <ResponsiveAppBar /> 
    <MyForm onSubmit={({email, firstName, lastName, phoneNumber}) => { 
    console.log(email, firstName, lastName, phoneNumber)
    }}
    /> 
    <CardAlbum /> 
    </div>
  );
}

export default App;
