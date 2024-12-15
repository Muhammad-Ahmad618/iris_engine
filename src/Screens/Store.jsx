import React from 'react'
import NavBar from '../Components/StoreNavBar'
import CoverSlider from '../Components/StoreCoverSlider'
import NewGamesSlider from '../Components/NewGamesSlider'
import Categories from '../Components/SlickSlider'
import GameCoverCards from '../Components/GameCoverCards'
import axios from 'axios'
import HorizontalGameCard from '../Components/HorizontalGameCard'

export default function Store() {

  const API_KEY =  'a82e5a54c5794044a40b36a465e6c265';

  const fetchGameData = async(genre,numbers,dates,specifics) => {
  
    let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${dates}&platforms=4&genres=${genre}&ordering=-metacritics&page_size=${numbers}`;
    
    if(specifics){
      API_url +=`&search=${specifics}`
    }
    try {
      const response = await axios.get(API_url);
      
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

  const fetch_Detailed_Game_Date = async (genre,numbers,dates,specifics) => {

    let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${dates}&platforms=4&genres=${genre}&ordering=-metacritics&page_size=${numbers}`;
    
    if(specifics){
      API_url +=`&search=${specifics}`
    }
    
    try{
    const response = await axios.get(API_url)
    const gameList = response.data.results;

    const game_With_Details = await Promise.all(
      gameList.map(async(game) => {
        const gameDetails = await axios.get(
          `https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`
        );
        return {
          ...game,
          description: gameDetails.data.description_raw,
          publishers: gameDetails.data.publishers.map(pub => pub.name).join(","),
          tags: gameDetails.data.tags.map(tag => tag.name).join(", "),
          developers:gameDetails.data.developers.map(dev => dev.name).join(",")
        }
      })
    )
    return game_With_Details
  }
  catch(error){
    console.log("Error while Fetching data", error)
    return error
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
      <GameCoverCards title="Top Speed" FetchGames={fetchGameData} />
      <HorizontalGameCard  title="Game of the Year" FetchDetailedGames={fetch_Detailed_Game_Date}/>
      <GameCoverCards title="Trending" FetchGames={fetchGameData}/>
      </div>
      </div>
    </div>
  )
}
