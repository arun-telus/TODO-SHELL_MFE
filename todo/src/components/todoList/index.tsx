import React from 'react'
import './index.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  handleTodoChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  filter: string;
}

/**
 * Renders a list of todos.
 */
const TodoList: React.FC<Props> = ({ todos, handleTodoChange, filter }) => {

  // Filter the todos based on the filter.
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed
    }
    if (filter === 'active') {
      return !todo.completed
    }
    return true
  })

  return (
    <div className='todoList'>
      {filteredTodos.map((todo) => (
        <div
          className='todoItem'
          key={todo.id}
          style={{
            background: todo.completed ? "rgb(49 103 103 / 33%)" : "#b380da",
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          <div>{todo.text}</div>
          <div style={{ display: "flex" }}>
            <input
              className='checkbox'
              type='checkbox'
              checked={todo.completed}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleTodoChange(e, todo.id) }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList
