import React from 'react'
import GamesCard from './GamesCard'
import Banner from '../Components/Banner'
import NewsLetter from './NewsLetter'

const Home = () => {
  return (
    <div className=''>
        <title>Home</title>

         <section className='w-11/12 mx-auto my-10'>
                <Banner></Banner>
            </section>

        <GamesCard></GamesCard>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home