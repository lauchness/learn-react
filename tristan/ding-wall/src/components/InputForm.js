import React, { useState } from 'react';
import './InputForm.css';


function InputForm( {addTask} ) {
  const [value, setValue] = useState(""); 

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
      <input type="submit" value="Add" />
    </form>
  );  
}

export default InputForm;
