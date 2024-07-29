import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import ApartmentPage from './pages/ApartmentPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function RouterComponent() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={Home} />
        <Route path="/About" element={<About />} />
        <Route path="/ApartmentPage/:id" element={<ApartmentPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RouterComponent
