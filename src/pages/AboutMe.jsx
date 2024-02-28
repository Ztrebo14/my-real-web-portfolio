import React from 'react'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <>
    <div className="about-me-container">
      <div className="myself-container">
        <h1>About Myself</h1>
        <p>
          Good day my fellow developers and learners, I'm Robert Bragais Abon, 
          I live in Pasay City Libertad and I proudly graduated in Technological University of the Philippines
          with Bachelor's Degree in Information Systems. I am aspiring to be a Front-End Developer
          by learnings from the world of Internet and also taking guide by
          other developers. I like learning new things and apply it on my work routine.
        </p>
      </div>
      <div className="quotes-container">
        <h1>Quotes</h1>
        <p>
          "Little Progresses can make soon a Bigger Progress" <br />
          "You can Rest, but never Stop"
        </p>
      </div>
    </div>
    </>
  )
}

export default AboutMe