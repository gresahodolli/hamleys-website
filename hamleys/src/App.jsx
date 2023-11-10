import { useState } from 'react'
import './App.css'
import Navbar from './components/CustomNavbar'
import HomePage from './components/HomePage'
import CarouselComponent from './components/Carousel1'
import MultipleToggles from './components/MultipleToggles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <HomePage />
      <MultipleToggles />
    </>
  )
}

export default App
