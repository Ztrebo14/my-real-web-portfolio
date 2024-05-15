import React from 'react'
import '../styles/Portfolio.css'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <ul>
          <li><a href="https://todo-list-app-robertabon.netlify.app">Todo-List App v1</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
          <li><a href="https://robo-user-app-robertabon.netlify.app">Robo User App</a></li>
        </ul> 
      </div>
      <h1>Description</h1>
      <div className="project-d-wrapper">
        <p>Project Description</p>
      </div>
    </div>
    </>
  )
}

export default Portfolio