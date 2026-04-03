import React from 'react'
import img from '../assets/fitermen.png'

const AboutDeveloper = () => {
  return (
    <div>
    <title>About</title>

      <div className='my-10 w-9/12 mx-auto'>
        <h1 className='text-2xl font-bold text-center text-shadow-2xs text-blue-800'>About Developer</h1>

      <div className='md:flex justify-between my-10 bg-sky-100 gap-10 rounded-md'>
        <div className='md:w-[50%] p-5'>
          <img className='w-full rounded-md shadow-lg' src={img} alt="" />
        </div>
        <div className='md:w-[50%] text-sm p-5'>
          <p><span className='font-bold'>Game Library</span> Game Library is an online platform created for game enthusiasts, where you can find detailed information, ratings, developer details, and download links for both popular and indie games — all in one place.</p>
          <p className='font-bold'>Our main goals are:</p>
         
            <li>To make it easy for both new and experienced gamers to discover games effortlessly.</li>
            <li>To showcase and support the work of game developers by bringing their creations to a wider audience.</li>
            <li>To provide users with a beautiful, engaging, and informative interface for an enjoyable browsing experience.</li>
        
        </div>
      </div>

      </div>

    </div>
  )
}

export default AboutDeveloper