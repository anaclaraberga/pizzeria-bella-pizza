import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css'
import Home from './pages/home.jsx'
import MonteSuaPizza from './pages/monteSuaPizza.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MonteSuaPizza" element={<MonteSuaPizza />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
