import React, { useState } from 'react';

function Input(props) {

  const specialChars = (text) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(text);
  }
  
  const numbers = (text) => {
    return /\d/.test(text);
  }
  
  const checkNamesAndColors = (string) => {
  if(!numbers(string) && !specialChars(string))
  setError(false)
  else
  setError(true)
  }

  const checkEmail = (string) => {
    if(string.includes("@"))
    setError(false)
    else
    setError(true)
  }
  const checkIfAgeGreaterThanZero = (string) => {
    if(Number.isInteger(parseInt(string)))
    {
      if(string > 0)
      setError(false)
      else
      setError(true)
    }
    else {
      setError(true)
    }
  }

  const [error, setError] = useState(false);

  const styledInput = {
    width: '300px',
    maxWidth: '90%',
    margin: 'auto',
    marginTop:'10px',
    marginBottom:'10px',
    height:'30px',
    borderRadius: '4px',
    borderColor: error ? '#cd0000' : ''
  };
  const styledErrorLabel = {
    fontSize:'10px',
    color:'#cd0000',
    marginBottom:'8px'
  }
  
  if(props.inputType == 'text') {
  return (
    <div>
    <label>{props.label}</label><br/>
    <input name={props.name} style={styledInput} onBlur={(e)=> checkNamesAndColors((e.target.value))} id={props.id} type="text"></input><br/>
    <div style={styledErrorLabel}>{error ? 'Please use valid characters only' : ''}</div>
    </div>
  );
  }
  if(props.inputType == 'email') {
    return (
      <div>
      <label>{props.label}</label><br/>
      <input name={props.name} style={styledInput} onBlur={(e)=> checkEmail((e.target.value))} id={props.id} type="text"></input><br/>
      <div style={styledErrorLabel}>{error ? '@ character missing' : ''}</div>
      </div>
    );
    }
  if(props.inputType == 'age') {
    return (
      <div>
      <label>{props.label}</label><br/>
      <input name={props.name} style={styledInput} onBlur={(e)=> checkIfAgeGreaterThanZero((e.target.value))} id={props.id} type="text"></input><br/>
      <div style={styledErrorLabel}>{error ? 'Please use positive numbers only' : ''}</div>
      </div>
    );
    }
    if(props.inputType == 'options') {
      return (
        <div>
           <label>{props.label}</label><br/>
          {props.params.map((item,i) => (
            <div key={i}>
          <input type="radio" id={props.id} name={props.name} value={item}/> <label>{item}</label>
          </div>
          ))}
         
        </div>
      )
}   
 if(props.inputType == 'checkbox') {
      return (
        <div>
           <label>{props.label}</label><br/>
    
          <input type="checkbox" id={props.id} name={props.name} />
          </div>
    
      )
}
}

export default Input;
