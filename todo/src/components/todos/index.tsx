import React, { ChangeEvent } from 'react'
import TodoList from '../todoList';
import './index.css'
import { useTodos } from './hooks';

interface Props {
  filter?: string;
}

const Todos: React.FC<Props> = ({ filter = 'all' }) => {

  const {
    todos,
    newTodo,
    setNewTodo,
    handleAddTodo,
    handleTodoChange
  } = useTodos()

  return (
    <div className='container'>
      <div style={{ padding: "0px" }}>
        <div style={{ margin: "20px", marginLeft: "0px" }}>Todos from mfe:</div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Type Todos..."
            className='inputField'
            value={newTodo}
            onChange={(e:ChangeEvent<HTMLInputElement>) => { setNewTodo(e.target.value) }}
          />
          <button
            className='addButton'
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>

      <hr style={{ border: "1px solid black" }} />
      <TodoList todos={todos} handleTodoChange={handleTodoChange} filter={filter} />
    </div>
  );
}

export default Todos;