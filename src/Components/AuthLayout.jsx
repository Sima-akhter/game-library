import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router'
import Footer from './Footer'

const AuthLayout = () => {
  return (
    <div>
        
           <header className=''>
            <Navber></Navber>
        </header>
       <main>
         <Outlet></Outlet>
       </main>

       <Footer></Footer>
        
    </div>
  )
}

export default AuthLayout