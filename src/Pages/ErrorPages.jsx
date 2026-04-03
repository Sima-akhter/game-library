import React from 'react'
import erroeImg from '../assets/error-404.png'
import { Link } from 'react-router'

const ErrorPages = () => {
  return (
    <div>
       <title>Error Pages</title>
      <div>
       <div className='flex justify-center items-center'>
         <img src={erroeImg} alt="" />
       </div>
        <h1 className='text-3xl md:text-5xl text-center font-bold text-violet-500'>404</h1>
        <p className='text-xl md:text-3xl text-center font-bold text-violet-500'>Page not found!</p>
        <p className='text-center text-violet-500'>Sorry, the page you are looking for might be removed, renamed or temporarily unavailable!</p>
        <div className='flex justify-center items-center'>
            <Link to='/' className='btn text-purple-500'>Back to home</Link>
        </div>
    </div>

    </div>
  )
}

export default ErrorPages