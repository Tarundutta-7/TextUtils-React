import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to Lowercase","Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
     props.showAlert("Listen !","Success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
     props.showAlert("Extra spaces are removed","Success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#5D8AA8' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : '#f1faee',
              color: props.mode === 'dark' ? 'white' : '#5D8AA8'
            }}
          ></textarea>
        </div>
    
        <div className="my-3">
  <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-2`} onClick={handleUpClick}>Uppercase</button>
  <button className={`btn btn-${props.mode === 'light' ? 'success' : 'light'} mx-2`} onClick={handleLoClick}>Lowercase</button>
  <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'light'} mx-2`} onClick={speak}>Speak</button>
  <button className={`btn btn-${props.mode === 'light' ? 'danger' : 'light'} mx-2`} onClick={handleExtraSpaces}>Remove Spaces</button>
</div>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#5D8AA8' }}>
        <h2><strong>Your Text Summary</strong></h2>
        <p>{(text || "").trim().split(/\s+/).filter(Boolean).length}<b> Words</b> , {(text || "").length} <b>Characters</b></p>
        <p>{0.008 * (text || "").trim().split(/\s+/).filter(Boolean).length} <b>Minutes read</b></p>
      </div>
    </>
  );
}
