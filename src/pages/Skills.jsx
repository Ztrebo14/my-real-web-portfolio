import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <>
    <div className="skills-container">
      <h1>My Technologies</h1>
      <div className="icon-list">
        <div id="html5-icon">
          <img 
            src='../../src/assets/icons/html-5-2.png' 
            title='HTML 5'
            alt='html-5'
            height='80'
            width='80'
          />
        </div>
        <div id="css3-icon">
          <img 
            src='../../src/assets/icons/css-3-2.png' 
            title='CSS 3'
            alt='css-3'
            height='80'
            width='80'
          />
        </div>
        <div id="js-icon">
          <img 
            src='../../src/assets/icons/js-1.png' 
            title='JavaScript'
            alt='javascript'
            height='80'
            width='80'
          />
        </div>
        <div id="nodejs-icon">
          <img 
            src='../../src/assets/icons/nodejs-500.png.png' 
            title='NodeJS'
            alt='nodejs'
            height='80'
            width='80'
          />
        </div>
        <div id="reactjs-icon">
          <img 
            src='../../src/assets/icons/react-1.png'
            title='ReactJS'
            alt='reactjs'
            height='80'
            width='80'
          />
        </div>
        <div id="vuejs-icon">
          <img 
            src='../../src/assets/icons/vuejs-2-500.png'
            title='VueJS'
            alt='vuejs'
            height='80'
            width='80'
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills