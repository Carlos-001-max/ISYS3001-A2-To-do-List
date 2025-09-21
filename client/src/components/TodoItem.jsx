export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}  // 改为 _id
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`ml-4 text-lg flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}  // 改为 _id
        className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}