import React from 'react';
import './ListTasks.css';
import ListItem from './ListItem';

function ListTasks( {tasks} ) {
  return (
    <div>
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
