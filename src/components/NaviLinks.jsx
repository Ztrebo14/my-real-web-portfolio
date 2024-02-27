import React from 'react'
import '../styles/NaviLinks.css'

const NaviLinks = ({ Link }) => {
  return (
    <>
    <div className="links-container">
      <Link to={'aboutme'}>About Me</Link>
      <Link to={'myskills'}>My Skills</Link>
      <Link to={'myportfolio'}>My Portfolio</Link>
      <Link to={'contactme'}>Contact Me</Link>
    </div>
    </>
  )
}

export default NaviLinks