import React, { useState } from 'react';
import './CreateTask.css';


function CreateTask( { addTask }) {
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
    </form>

  );
}

export default CreateTask;