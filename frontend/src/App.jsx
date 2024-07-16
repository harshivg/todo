import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos}/>
      </div>
    </>
  )
}

export default App
