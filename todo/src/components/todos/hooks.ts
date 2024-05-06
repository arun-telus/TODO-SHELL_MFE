import { useEffect, useState } from "react"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface UseTodosReturn {
  todos: Todo[];
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
  handleTodoChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

/**
Custom hook for managing todos.
This hook provides functionality for managing a list of todos, including adding new todos,
marking todos as completed, and persisting the todos in local storage.
@returns An object containing the todos, functions to modify the todos,
and the current new todo input value. 
*/ 
export const useTodos = ():UseTodosReturn => {

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "create the MFE", completed: false },
    { id: 2, text: "Create shell", completed: true },
    { id: 3, text: "hook up module fedration", completed: false },
  ])
  const [newTodo, setNewTodo] = useState<string>('')

  // Load todos from local storage
  useEffect(() => {
    try {
      const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
      setTodos(localTodos);
    } catch (error) {
      console.error('Error loading todos from local storage:', error);
    }
  }, [])

  // Save todos to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const handleAddTodo = () => {
    if (!newTodo) return
    const newTodos = [...todos, { id: todos.length + 1, text: newTodo, completed: false }]
    setTodos(newTodos)
    setNewTodo('')
  }

  // Handle todo change (completed or not)
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: e.target.checked
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return { todos, newTodo, setNewTodo, handleAddTodo, handleTodoChange}
}