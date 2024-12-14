import React from 'react'
import NavBar from '../Components/StoreNavBar'
import CoverSlider from '../Components/StoreCoverSlider'
import NewGamesSlider from '../Components/NewGamesSlider'
import Categories from '../Components/SlickSlider'
import GameCover from '../Components/GameCover'
import axios from 'axios'
import HorizontalGameCard from '../Components/HorizontalGameCard'

export default function Store() {

  const fetchGameData = async(genre,numbers,dates,specifics) => {
    
    const API_KEY =  'a82e5a54c5794044a40b36a465e6c265';
    let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${dates}&platforms=4&genres=${genre}&ordering=-metacritics&page_size=${numbers}`;
    
    if(specifics){
      API_url +=`&search=${specifics}`
    }
    try {
      // Make the API call
      const response = await axios.get(API_url);
      
      // Check if 'results' exists in the response
      if (response.data && response.data.results) {
        return response.data.results;  // Return the results if available
      } else {
        console.log('No results found:', response.data);  // Log the response for debugging
        return [];  // Return empty array if no results
      }
    } catch (error) {
      console.error('Error while fetching:', error);
      return [];  // Return empty array in case of error
    }
  }

  return (
    <div className='min-h-screen bg-custom-gradient'>
      <NavBar/>
      <div className='px-16 py-28'>
      <CoverSlider/>
      <div className='px-32 pt-28 space-y-16'>
      <NewGamesSlider/>      
      <Categories/>
      <GameCover title="Top Speed" FetchGames={fetchGameData} />
      <HorizontalGameCard FetchGames={fetchGameData}/>
      </div>
      </div>
    </div>
  )
}
