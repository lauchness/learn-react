import React, { useState } from 'react';
import './ListTasks.css';
import ListItem from './ListItem';
import InputForm from './InputForm';

/* I'm having trouble organising this app in a way that conforms to
my understanding of good, component-based, React programming.

E.g.: I don't like the "const xxYy = zzz => {}" syntax. I much prefer the 
eqivalent(?) functional syntax (function xxYy(zzz) = {}), though it seems that 
functions written in this way ought to be saved as components in a separate file. In the 
case of the below, the addTask function makes use of the setTask state setting function,
so (presumably) cannot be saved as a separate file. This means that my InputForm 
component also cannot be a separate file, since it makes use of addTask.

It makes sense to me that there should be separate components 
responsible for rendering the input form (InputForm) and the list of tasks
(ListTasks) -- see https://reactjs.org/docs/thinking-in-react.html --
yet because of the reasons above, it seems necessary to have a single file that 
contains both compnents. Need some guidance on this one... 

EDIT: I figured most of this out, but I'm leaving the comment for 
future discussion.

Note that I relied heavily on the tutorial at
https://www.pusher.com/tutorials/todo-app-react-hooks
*/

function ListTasks() {
  const initialTasks = [{text: "buy lumber"},
                        {text: "fix the house"},
                        {text: "move in"}];

  const [tasks, setTasks] = useState(initialTasks);  

  // arghh:
  const addTask = text => {
    const newTasks = [...tasks, { text }];
      setTasks(newTasks);
  };

  return (
  // list of tasks
    <div>
      <div className="input-container">
        <InputForm addTask={addTask} />
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <ListItem key={index}
                    value={task} />  
        ))}
      </ul>
    </div>
  );
}

export default ListTasks;