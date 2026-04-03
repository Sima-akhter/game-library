import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const GamesCard = () => {

const [cards, setCard] = useState([]);

useEffect(()=>{
    fetch('/GameData.json')
    .then(res=> res.json())
    .then(data=> {const sortedData = [...data].sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    setCard(sortedData)}
)
    
    
}, [])


  return (
    <div className=''>

         <h1 className='text-2xl text-center font-bold mt-10 text-blue-800 text-shadow-2xs'>Popular Games Section</h1>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
      {
        cards.map(card=> (<Cards key={card.id} card={card}></Cards>) )
    }
   </div>


    </div>
  )
}

export default GamesCard