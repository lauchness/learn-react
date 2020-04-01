import React from 'react';
import './ListSection.css';
import ListTasks from './ListTasks';
// import InputForm from './InputForm';

/* This file seems redundant now, since InputForm is now a child of 
ListTasks, though that was not what I set out to do.
*/
function ListSection() {
  return (
    <section className="list-container">
      <h2>The list:</h2>
      {/* <InputForm /> */}
      <ListTasks />
    </section>
  );
}

export default ListSection;