import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default Userlayout