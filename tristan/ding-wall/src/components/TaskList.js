import React from 'react';

function TaskList(props) {
  const task = props.numbers;
  const listItems = numbers.map((number) =>    
    <ListItem key={number.toString()}              
              value={number} />  
  );  
  
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default TaskList;