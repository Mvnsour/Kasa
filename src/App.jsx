import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import ApartmentPage from './pages/ApartmentPage'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ApartmentPage/:id" element={<ApartmentPage />} />
        {/* path allows to display a page according to the id item */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        {/* path="*" allows to display a 404 error if the path does not match any set path */}
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
