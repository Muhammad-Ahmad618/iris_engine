import React, { useEffect, useState } from 'react';

export default function HorizontalGameCard({ FetchGames }) {
    const [game, setGames] = useState([]);

    useEffect(()=> {
       
      const FetchData = async() => {
      const responseData = await FetchGames('3',1,'2023-01-01,2023-11-30')
    
        // Ensure that the response is an array or fallback to an empty array
        if (Array.isArray(responseData)) {
          setGames(responseData);
        } else {
          setGames([]); // Set empty array if the response is not an array
        }
      }
        
      FetchData()
  
    },[FetchGames])

    if (game.length === 0) {
        return <div className='text-center text-[1.3rem] text-white'>No games found.</div>;
      }
  
  return (
    <div className=' w-full h-[25rem]'>
      <div className='max-w-[35rem]'>
          <img src={game[0].background_image} alt={game[0].name} className='rounded-md w-full' />
      </div>
      <div>
        <h1>{game[0].name}</h1>
        <p>{game[0].description_raw}</p>
        <p>{game[0].rating}</p>
      </div>
    </div>
  );
}
