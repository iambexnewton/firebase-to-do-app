import React, { useState, useEffect } from 'react';

import db from '../Firebase/firebase-set-up';

import Todo from './Todos.js';

export default function Forms() {
  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setTodos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    console.log('kgvdskahv');
    setTodos([...todos, input]);
    setInput('');
  };

  // const handleChange = (e) => {
  //   setTodo(e.target.value);
  // };

  return (
    <form>
      <input
        type="text"
        placeholder="enter a Todo..."
        className="todo-input"
        value={input}
        required
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        onClick={addTodo}
        className="button-add"
        type="submit"
        disabled={!input}
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </form>
  );
}
