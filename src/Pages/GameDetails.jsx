import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import GamesDetailsCard from '../Components/GamesDetailsCard';

const GameDetails = () => {
    

    const data = useLoaderData();

    const{id} = useParams();
    const [games, setGames] = useState({});
    // console.log(data, id, games);

    useEffect(()=>{
        const newsDetails = data. find((singleNews) => singleNews.id == id);
        setGames(newsDetails);
    },[data, id])

    
  return (
    <div>
    
    <div>
        <h1 className='text-2xl text-center font-bold py-5 text-blue-800 text-shadow-2xs'>Game Details</h1>
        <div className='mt-10 md:w-8/12 mx-auto'>
            <GamesDetailsCard games={games}></GamesDetailsCard>
        </div>
    </div>
    
    </div>
  )
}

export default GameDetails