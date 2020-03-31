import React, { useState } from 'react';
import ListItem from './ListItem';

function ListTasks() {
  const initialTasks = [{text: "placeholder 1"},
                        {text: "placeholder 2"},
                        {text: "placeholder 3"}];

  const [tasks, setTasks] = useState(initialTasks);  

  return (
  // list of tasks
    <ul className="task-list">
      {tasks.map((task, index) => (
        <ListItem key={index}
                  value={task} />  
      ))}
    </ul>
  );
}

export default ListTasks;

