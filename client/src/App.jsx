import { useState, useEffect } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import FilterButtons from "./components/FilterButtons"

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            📝 Todo App
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Manage your daily tasks
          </p>
          
          <TodoForm onAdd={addTodo} />
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">
              Total: {totalCount} tasks
            </span>
            <span className="text-sm text-green-600">
              Completed: {completedCount}
            </span>
          </div>

          <FilterButtons filter={filter} setFilter={setFilter} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>ISYS3001 Assignment 2 - Todo Application</p>
          <p>Data automatically saved to local storage</p>
        </div>
      </div>
    </div>
  )
}

export default App