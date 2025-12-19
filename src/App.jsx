import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Componets/Navigation/Navigation.jsx'
import AllComponents from './Componets/AllComponets/Allcomponets.jsx'
import About from './Componets/pages/About/About.jsx'



function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllComponents />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"

          />
          <Route
            path="/contact"

          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
