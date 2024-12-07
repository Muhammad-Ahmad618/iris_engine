import React from 'react'
import NavBar from '../Components/StoreNavBar'
import CoverSlider from '../Components/StoreCoverSlider'
import NewGamesSlider from '../Components/NewGamesSlider'
import Categories from '../Components/SlickSlider'
import GameCover from '../Components/GameCover'

export default function Store() {
  return (
    <div className='min-h-screen bg-custom-gradient'>
      <NavBar/>
      <div className='px-16 py-24 space-y-16'>
      <CoverSlider/>
      <div className='px-32'>
      <NewGamesSlider/>
      <Categories/>
      <GameCover title="Top Speed"/>
      </div>
      </div>
    </div>
  )
}
