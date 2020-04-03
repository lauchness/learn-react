import React, { useState } from 'react';
import './ListSection.css';
import ListTasks from './ListTasks';
import InputForm from './InputForm';

/* 
To do: add ability to edit (complete? i.e. strikethrough) and remove tasks, 
or at least remove.

Note that I relied heavily on the tutorial at
https://www.pusher.com/tutorials/todo-app-react-hooks
*/

function ListSection() {

  const initialTasks = [{text: "buy lumber"},
                        {text: "fix the house"},
                        {text: "move in"}];

  const [tasks, setTasks] = useState(initialTasks);  

  const addTask = text => {
    setTasks([...tasks, { text }]);
  };

  return (
    <section className="list-container">
      <h2>The list:</h2>
      <InputForm addTask={addTask} />
      <ListTasks tasks={tasks}/>
    </section>
  );
}

export default ListSection;
