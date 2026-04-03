import React from 'react'
import { Outlet,  useNavigation } from 'react-router'
import Navber from '../Components/Navber'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Loading from '../Pages/Loading'

const MainLayout = () => {
  const {state} = useNavigation();
  return (
    <div>
        <nav>
            <Navber></Navber>
           
        </nav>
        <section className='w-11/12 mx-auto'>
        {state == 'loading'? <Loading/> : <Outlet></Outlet>}
          
        </section>
       <section className='mt-10'>
         <Footer></Footer>
       </section>

    </div>
  )
}

export default MainLayout