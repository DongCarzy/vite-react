import { useState } from 'react'
import TodoItem from './components/todo-item'
import TodoList from './components/todo-list'
import TodoSearch from './components/todo-search'
import 'antd/dist/antd.css';
import STATUS from './config/status';

function App() {

  const [todos, setTodos] = useState([])
  const [searchStatus, setSearchStatus] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`)

  const handleSubmit = (item) => {
    setTodos([
      ...todos,
      item
    ])
  }

  const handleOperate = (item) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)
    newTodos.push(item)
    setTodos(newTodos)
  }

  const handlerStatusChange = (status) => {
    setSearchStatus(status)
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <TodoItem onSubmit={handleSubmit} />
      <TodoSearch searchStatus={searchStatus} onSearch={handlerStatusChange} />
      <TodoList
        todos={todos}
        onOperate={handleOperate}
        searchStatus={searchStatus}
      />
    </div>
  )
}

export default App
