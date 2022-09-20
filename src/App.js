import { useState } from "react";
import React from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";



function App() {
  const [mode,setMode] =  useState('light');
  
  const [alert,setAlert] =  useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode has been enabled","success")


    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
      <Alert alert={alert}/>
      <div className="container my-3">  
      
      <TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode}/>
      </div>
     
    </>
  );
}

export default App;

