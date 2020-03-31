import React, { useState } from 'react';
// import './TodoList.css';
import CreateTask from './CreateTask'


function Task({ todo }) {
    return (
        <div className="task">
            {todo.title}
        </div>
    );
}

function TodoList() {

  const initialTodos = [{ text: "Learn about React" },
                        { text: "Build really cool todo app" }];
  
  const [todos, setTodos] = useState(initialTodos);  

  // I find this syntax really confusing
  const addTodo = title => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      {todos.map((todo, index) => (
          <Task 
            todo={todo}
            index={index}
            key={index}
          />
      ))}
      <CreateTask addTodo={addTodo} />
    </div>  
  );  
}

export default TodoList;