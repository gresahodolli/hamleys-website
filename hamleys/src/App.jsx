import { useState } from 'react'
import './App.css'
import Navbar from './components/CustomNavbar'
import HomePage from './components/HomePage'
import CarouselComponent from './components/Carousel1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <HomePage />
    </>
  )
}

export default App
