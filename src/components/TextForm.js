import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');

    function handleOnChange(event){ 
        setText(event.target.value)
    }

    function handleUpClick(){
        let newText = text.toUpperCase()
        setText(newText)
      props.showAlert('Changed to UpperCase','primary')
        
    }
    function handleLoClick(){
        let newText = text.toLowerCase()
        setText(newText)
      props.showAlert('Changed to lowerCase','warning')

    }

    return (
        <>
        <div className='container my-3' style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>TextUtils - Change Word Cases And Count Your Words</h1>
            <div className="mb-3" style={props.mode==-'light'? {color:'white'}:{color:'grey'}}>
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode == 'light'?'white':'#202c68',color:props.mode == 'light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Change To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Change To LowerCase</button>
        </div>
        <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((e)=>e.length!=0).length} Words and {text.length} Characters</p>
            <p>{.008 * text.length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length===0?'Nothing To Preview!': text}</p>
        </div>
        </>
    )
}
