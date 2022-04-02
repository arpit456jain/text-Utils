 import React , {useState} from "react";

export default function TextForms(props) {
  const [text,setText] = useState("")
  const handleUpperCaseClick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("changes to upper case","success")
  };
  const handleLowerCaseClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("changes to lower case","success")
  };
  const handleclearClick=()=>{
    let newtext = "";
    setText(newtext);
  };
  const handleOnChange=(event)=>{
    console.log("OnChange")
    setText(event.target.value)
  };
  
  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
    props.showalert("changed first letter to Capital","success")
}

const handleExtraSpaces = ()=>{
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText)
  }
  const handleSrchClick = () => {
    let str = prompt("enter the string you wanna search :");
    let newText = text.includes(str, 0);
    if (newText === true){
      alert("the string " + str + " is present..");
    }
    else{
      alert("the string " + str + " is not present..");
    }
}

const handleCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
  
  return (
    <>
    <div className={`text-${props.mode === 'light'?'dark':'light'} container`}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="Enter text here"
          rows="8"
          value={text} onChange={handleOnChange}
          style={{backgroundColor : props.mode === 'light'?'#fff':'grey',color : props.mode === 'light'?'black':'#fff'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>Covert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Covert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>Make First Letter Capital</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleSrchClick}>Search the string</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the string</button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear</button>
      <div className="container my-2">
      <p>Now of Words {text.split(" ").length} and no of characters {text.length}</p>
      <p>
        {0.008 * text.split(" ").length } of read...
      </p>
    </div>
    </div>
    
    </>
  );
}
