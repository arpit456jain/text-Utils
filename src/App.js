// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import Alert from './components/Alert'
import About from './components/About'
import React,{useState} from 'react'
function App() {
  const [mode, setmode] = useState("light")
  const [alert,setalert] = useState(null);

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
  const toggleMode = () =>{
      if(mode === "light")
      {
        setmode("dark");
        document.body.style.backgroundColor = "rgb(0 75 124)"
        showalert("Dark mode enabled","success")
      }
      else
      {
        setmode("light");
      document.body.style.backgroundColor = "#fff"
      showalert("Light mode enabled","success")
      }
  }
  return ( 
    <>
     
    <Navbar title="Textutils" aboutText="about here" mode={mode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>
    <div className="container">
    {/* <About /> */}
    <TextForms heading="Enter text to analyze"  mode={mode} showalert={showalert} />
        </div>

    </>
  );
}

export default App;
