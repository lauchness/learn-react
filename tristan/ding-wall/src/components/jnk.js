    import React, { useState } from 'react';
    // import './Todo.css';

    function ListItems({ task }) {
        return (
            <div className="task">
                {task.title}
            </div>
        );
    }
    function Todo() {

        var initialTasks = [
            {title: "Grab some Pizza"},
            {title: "Do your workout"},
            {title: "Hangout with friends"}
        ];

        const [tasks, setTasks] = useState(initialTasks);

        
        
        return (
                <ul className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                        />
                    ))}
                </ul>
        );
    }

    export default Todo;


    