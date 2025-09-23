import TodoItem from "./TodoItem"

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-xl">No tasks yet</p>
        <p className="text-sm">Add your first task to get started!</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}  // 改为 _id
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}