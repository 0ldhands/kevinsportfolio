import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/footer'
import Content from '../components/Content'
import { Outlet } from 'react-router-dom'


const Homelayout = () => {
  return (
    <div className='main-cont'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Homelayout