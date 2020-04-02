import React, { useState } from 'react';
import './InputForm.css';


function InputForm( {addTask} ) {
  const [value, setValue] = useState(""); 

  // I have no love for this syntax:
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
  
    addTask(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add task..."
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );  
}

export default InputForm;
