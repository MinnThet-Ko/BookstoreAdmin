import { useState } from 'react'
import NavComponent from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavComponent/>
    </>
  )
}

export default App
