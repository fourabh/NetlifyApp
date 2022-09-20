import React, {useState} from "react";



export default function TextForm(props) {
    const [text , setText] = useState("");
    
    const handleUpClick = () => {
        // console.log("upperCase was clicked : " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to upperCase","success")
    }

    const handleLoClick = () => {
        // console.log("lowerCase was clicked : " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowerCase","success")


      }
    const handleClrClick = () => {
      
      let newText = "";
      setText(newText)
      props.showAlert(" Text Cleared","success")
 
    }

    const handleCopy = () => {
      console.log("i am a copy" )
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Copied to Clipboard","success")

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(" Extra spaces Removed","success")

    }
    
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3" >
       
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} 
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>ConvertToUpeerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>ConvertToUpeerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}CHARACTERS characters</p>
      <p>Required {0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
