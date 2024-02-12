import React from 'react'
import '../styles/NaviLinks.css'

const NaviLinks = ({ Link }) => {
  return (
    <>
        <div className="right-side-container">
            <div className="links">
                <Link to={'aboutme'}>About Me</Link>
                <Link to={'myskills'}>My Skills</Link>
                <Link to={'myportfolio'}>My Portfolio</Link>
                <Link to={'contactme'}>Contact Me</Link>
            </div>
        </div>
    </>
  )
}

export default NaviLinks