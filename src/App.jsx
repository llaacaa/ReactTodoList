import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import './App.css'
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
