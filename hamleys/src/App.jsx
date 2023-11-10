import { useState } from 'react'
import './App.css'
import Navbar from './components/CustomNavbar'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default App
