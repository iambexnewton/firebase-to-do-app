import React, { useState } from 'react';

export default function Forms() {
  const [taskName, setTaskName] = useState('');

  const createTodo = () => {};

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        placeholder="enter a Todo..."
        className="task-input"
        value={taskName}
        required
        onChange={handleChange}
      />
      <button></button>
    </form>
  );
}
