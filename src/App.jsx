import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'
const App = () => {

  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true)

  function handleToggleMenu(){
    setShowSideMenu(!showSideMenu)
  }
  function handleCloseMenu(){
    setShowSideMenu(true)
  }

  return (
    <>
    <Header handleToggleMenu={handleToggleMenu}/>
      <SideNav showSideMenu={showSideMenu} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
      handleCloseMenu={handleCloseMenu}/>
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App