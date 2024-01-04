import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext';

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const { addToDo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todos) return;
    addToDo({ todo: todos, completed: false })
    setTodos("");
  }
  return (
    <div>
      <form className="flex" onSubmit={add}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
