import React, { useState } from 'react';
// import './UpdateList.css';


function UpdateList() {
  // Declare a new state variable, which we'll call "count"  
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  
  // var initialArray = ["Learn hooks", "Finish exterior walls", "Pour new footing"];
  var initialArray = [{ text: "Learn about React" },
                      { text: "Meet friend for lunch" },
                      { text: "Build really cool todo app" }];
  
  const [todos, setTodos] = useState(initialArray);

  setTodos(oldArray => [...oldArray, newElement]);
  
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={todos} />
    </form>

  );
}

export default UpdateList;