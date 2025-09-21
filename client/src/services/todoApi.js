const API_BASE = 'http://localhost:3000/api';

export const todoApi = {
  // 获取所有 todos
  async getAll() {
    const response = await fetch(`${API_BASE}/todos`);
    return await response.json();
  },

  // 创建新 todo
  async create(text) {
    const response = await fetch(`${API_BASE}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    return await response.json();
  },

  // 更新 todo
  async update(id, updates) {
    const response = await fetch(`${API_BASE}/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });
    return await response.json();
  },

  // 删除 todo
  async delete(id) {
    await fetch(`${API_BASE}/todos/${id}`, {
      method: 'DELETE'
    });
  }
};