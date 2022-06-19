import * as React from "react";
import './App.css'; 
import { MyForm } from "./components/MyForm";
import  ResponsiveAppBar from "./components/AppBar"; 
import CardAlbum from "./components/CardAlbum";
import Hero from "./components/Hero"; 
import Footer from "./components/Footer"; 



const App = () => { 
  return (
    <div style={{textAlign:"center"}}>
    <ResponsiveAppBar /> 
     
      <CardAlbum /> 
      <Hero /> 
    <MyForm onSubmit={({email, firstName, lastName, phoneNumber}) => { 
    console.log(email, firstName, lastName, phoneNumber)
    }}
    /> 
    <Footer /> 
    </div>
  );
}

export default App;
