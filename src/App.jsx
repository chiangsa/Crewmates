import { useState } from 'react'
import './App.css'
import Home from './routes/Home'
import Create from './routes/Create'
import Layout from './routes/Layout'
import Gallery from './routes/Gallery'
import CrewmateStats from './components/CrewmateStats'
import Update from './components/CrewmateUpdate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes className="navbar">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<CrewmateStats />} />
          <Route path="/crewmate/update/:id/:name/:speed/:color" element={<Update />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
