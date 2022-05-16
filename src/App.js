// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import Alert from './components/Alert'
import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const [alert,setalert] = useState(null);
  // sessionStorage.setItem("mode", "light");
  // alert ek object hai jo phle null tha or ab hum usko value de ra hai

  const showalert = (message,type)=>{
      setalert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  
  window.onload = () => {
    console.log("in handle");
    var item_value = sessionStorage.getItem("mode");
    if(item_value === "dark")
    {
      console.log("vr");
      setmode("dark");
      document.getElementById('flexSwitchCheckDefault').checked = true;
      document.body.style.backgroundColor = "rgb(0 75 124)"
    }
    else
    {
     setmode("light");
     document.getElementById('flexSwitchCheckDefault').checked = false;
      document.body.style.backgroundColor = "#fff"
    }
}
  
  
  const toggleMode = () =>{
      if(mode === "light")
      {
        setmode("dark");
        document.body.style.backgroundColor = "rgb(0 75 124)"
        showalert("Dark mode enabled","success")
        sessionStorage.setItem("mode", "dark");
      }
      else
      {
        setmode("light");
      document.body.style.backgroundColor = "#fff"
      showalert("Light mode enabled","success")
      sessionStorage.setItem("mode", "light");
      }
  }
  return ( 
    <>
     
    <Navbar title="Textutils" aboutText="about" mode={mode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForms heading="Enter text to analyze"  mode={mode} showalert={showalert} />} />

      </Routes>
    </BrowserRouter>
        </div>

    </>
  );
}

export default App;
