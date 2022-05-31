import React, {useState} from 'react'


function InputArea(props) {

  
    const  handleChange = (event)=> {
  setText(event.target.value);
    }

    const  handleUClick = ()=> {
  let newText = text.toUpperCase();
  setText(newText)
    }

    const  handleLClick = ()=> {
      let newText = text.toLowerCase();
      setText(newText)
        }

        const  copyText = ()=> {

          const input = document.getElementById('txta');
          input.select();
          navigator.clipboard.writeText(text)
          setBtnText("Copied To Clipboard")

            }

        function eraseText() {
         // document.getElementById("txta").value = "";
         setText("")
      }

     
    const [text, setText] = useState('');
    const [btnText, setBtnText] = useState("Copy Text"); 

  return (
      <>
   
<h1 align='center' style={{color: props.mode==='light'? 'black':'white'}} >{props.heading}</h1>

    <div className='container my-4'>
<textarea className="form-control" style={{backgroundColor: props.mode==='light'? '#E3F2FD':'#A4A690',color: props.mode==='light'? 'black':'white'}} 
rows="6" id='txta' value={text} onChange={handleChange} placeholder="Enter Your Text Here!" >
  </textarea>

  <button className={`btn btn-${props.btnColor} my-2 mx-2`} onClick={handleUClick}>ConvertToUpperCase</button>
  <button className={`btn btn-${props.btnColor} my-2 mx-2`} onClick={handleLClick}>ConvertToLowerCase</button>
  <button className={`btn btn-${props.btnColor} my-2 mx-2`} onClick={copyText} >{btnText}</button>
  <button className={`btn btn-${props.btnColor} my-2 mx-2`} onClick={eraseText}>ClearText</button>
  

    </div>
    <div className='container my-2'>
      <h3 style={{color: props.mode==='light'? 'black':'white'}}>Text Summary</h3>
      <p style={{color: props.mode==='light'? 'black':'white'}}>Total number of characters {text.length} and Total numbers of words are {text.split(' ').length-1} </p>
    </div>
    </>
  )
}

export default InputArea
