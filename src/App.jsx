import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Componets/Navigation/Navigation.jsx'
import AllComponents from './Componets/AllComponets/Allcomponets.jsx'



function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/*" element={<AllComponents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
