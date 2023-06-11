import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} /> 
            <Route path='/services' element={<Services />} /> 
            <Route path='/news' element={<News />} /> 
            <Route path='/contact' element={<Contact />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
