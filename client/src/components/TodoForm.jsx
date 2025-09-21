import { useState } from "react"

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10 w-full">
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="task-input" className="text-2xl font-bold text-gray-800 text-center">
          ✨ Add Your Task
        </label>
        <div className="flex shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 w-full">
          <input
            id="task-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task here..."
            className="flex-1 px-8 py-6 border-0 text-2xl focus:outline-none focus:ring-0 bg-white placeholder-gray-400 min-h-20 w-full"
            style={{ minHeight: '80px' }}
          />
          <button
            type="submit"
            className="px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 whitespace-nowrap flex items-center justify-center"
            style={{ minWidth: '180px' }}
          >
            <span className="mr-2">➕</span>
            Add
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Press Enter or click Add to save your task
        </p>
      </div>
    </form>
  )
}