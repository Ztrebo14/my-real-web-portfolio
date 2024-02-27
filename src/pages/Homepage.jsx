import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Homepage.css'
import IntroMe from '../components/IntroMe'
import NaviLinks from '../components/NaviLinks'

const Homepage = () => {
  return (
    <>
      <div className="home-container">
          <IntroMe />
          <div className="right-side-container">
            <NaviLinks Link={Link} />
            <Outlet/>
          </div>
      </div>
      
    </>
  )
}

export default Homepage