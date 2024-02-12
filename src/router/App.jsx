import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Skills from "../pages/Skills"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import AboutMe from "../pages/AboutMe"
import '../styles/App.css'

function App() {

  return (
    <>
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/myskills" element={<Skills/>}/>
            <Route path="/myportfolio" element={<Portfolio/>}/>
            <Route path="/contactme" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
