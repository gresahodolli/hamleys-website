import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import CarouselComponent from './components/Carousel1'
import MultipleToggles from './components/MultipleToggles'
import ImageButtonsContainer from './components/ImageButtonsContainer'
import ShopByAge from './components/ShopByAge'
import FavoriteCategories from './components/FavoriteCategories'
import HamleysTopToys from './components/HamleysTopToys'
import FavouriteBrands from './components/FavouriteBrands';
import BestSelling from './components/BestSelling';
import LegoStore from './components/LegoStore';
import FavoriteCharacters from './components/FavoriteCharacters'
import GiftFinder from './components/GiftFinder';
import FinestToys from './components/FinestToys'
import EmailSubmit from './components/EmailSubmit';
import Footer from './components/Footer'
//import LoginSignup from './components/LoginSignup'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <HomePage />
      <MultipleToggles />
      <ImageButtonsContainer />
      <ShopByAge />
      <FavoriteCategories />
      <HamleysTopToys />
      <FavouriteBrands />
      <BestSelling />
      <LegoStore />
      <FavoriteCharacters />
      <GiftFinder />
      <FinestToys />
      <EmailSubmit />
      <Footer />
      {/* <LoginSignup /> */}
      
    </>
  )
}

export default App
