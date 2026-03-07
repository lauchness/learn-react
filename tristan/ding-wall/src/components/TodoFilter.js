import React, { useState, useMemo } from 'react';
import './TodoFilter.css';

function TodoFilter() {
  // Sample todo list with priority levels
  const [todos] = useState([
    { id: 1, text: "Learn about React hooks", priority: "high", completed: false },
    { id: 2, text: "Build a todo application", priority: "high", completed: false },
    { id: 3, text: "Read React documentation", priority: "medium", completed: true },
    { id: 4, text: "Practice useState hook", priority: "medium", completed: true },
    { id: 5, text: "Master useMemo optimization", priority: "high", completed: false },
    { id: 6, text: "Learn useCallback", priority: "low", completed: false },
    { id: 7, text: "Build portfolio project", priority: "high", completed: false },
    { id: 8, text: "Review JavaScript fundamentals", priority: "medium", completed: true },
  ]);

  const [filterPriority, setFilterPriority] = useState('all');
  const [showCompleted, setShowCompleted] = useState(true);

  // useMemo Example: This expensive computation only runs when dependencies change
  // Without useMemo, this would recalculate on every render (even if unrelated state changes)
  // With useMemo, it only recalculates when todos, filterPriority, or showCompleted change
  const filteredAndSortedTodos = useMemo(() => {
    console.log('🔄 Recalculating filtered todos...'); // You'll see this only when dependencies change

    // Filter by completion status
    let result = showCompleted
      ? todos
      : todos.filter(todo => !todo.completed);

    // Filter by priority if not 'all'
    if (filterPriority !== 'all') {
      result = result.filter(todo => todo.priority === filterPriority);
    }

    // Sort by priority (high -> medium -> low)
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    result = result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return result;
  }, [todos, filterPriority, showCompleted]); // Dependencies array - recompute only when these change

  // Calculate statistics using the memoized filtered list
  // This also benefits from useMemo to avoid recalculating on every render
  const stats = useMemo(() => {
    const total = filteredAndSortedTodos.length;
    const completed = filteredAndSortedTodos.filter(t => t.completed).length;
    const highPriority = filteredAndSortedTodos.filter(t => t.priority === 'high').length;

    return { total, completed, highPriority };
  }, [filteredAndSortedTodos]);

  return (
    <section className="todo-filter-container">
      <h2>useMemo Performance Example</h2>

      <div className="filters">
        <label>
          Priority Filter:
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </label>

        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          Show Completed
        </label>
      </div>

      <div className="stats">
        <p>Total: {stats.total} | Completed: {stats.completed} | High Priority: {stats.highPriority}</p>
      </div>

      <ul className="todo-list">
        {filteredAndSortedTodos.map(todo => (
          <li key={todo.id} className={`priority-${todo.priority} ${todo.completed ? 'completed' : ''}`}>
            <span className="priority-badge">{todo.priority}</span>
            <span className="todo-text">{todo.text}</span>
            {todo.completed && <span className="check-mark">✓</span>}
          </li>
        ))}
      </ul>

      <div className="explanation">
        <h3>How useMemo is used here:</h3>
        <ul>
          <li>
            <strong>filteredAndSortedTodos:</strong> Memoizes the expensive filtering and sorting operations.
            Without useMemo, these would run on every render, even when filters haven't changed.
          </li>
          <li>
            <strong>stats:</strong> Memoizes statistical calculations based on the filtered list.
            Only recalculates when the filtered list actually changes.
          </li>
          <li>
            <strong>Dependencies:</strong> The second argument [todos, filterPriority, showCompleted] tells React
            when to recompute. Change a filter and check the console to see the recalculation message.
          </li>
        </ul>
        <p><em>Open your browser console to see when recalculations happen!</em></p>
      </div>
    </section>
  );
}

export default TodoFilter;
