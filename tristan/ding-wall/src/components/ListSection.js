import React from 'react';
import './ListSection.css';
import ListTasks from './ListTasks';
// import CreateTask from './CreateTask'
// import TodoList from './TodoList'
// import Todo from './jnk'

function ListSection() {
  return (
    <section className="list-container">
      <h2>The list:</h2>
      {/* <p><em>[list components to be added using useState hooks]</em></p> */}

      <ListTasks />
      {/* <CreateTask />
      <TodoList /> */}
      {/* <Todo /> */}

    </section>
  );
}

export default ListSection;