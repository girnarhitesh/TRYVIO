import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Componets/Navigation/Navigation.jsx'
import AllComponents from './Componets/AllComponets/Allcomponets.jsx'
import About from './Componets/pages/About/About.jsx'
import React, { useMemo, useState, useCallback } from 'react'
import Favorites from './Componets/pages/Favorites/Favorites.jsx'
import Product from './Componets/pages/Product/Product.jsx'

const languagesMap = { IN: 'hi', US: 'en', FR: 'fr', DE: 'de', ES: 'es' }
const translations = {
  en: { menu: 'MENU', favorites: 'Favorites', view: 'View', search: 'Search', cart: 'Cart', country: 'Country' },
  hi: { menu: 'MENU', favorites: 'Favorites', view: 'View', search: 'Search', cart: 'Cart', country: 'Country' },
  fr: { menu: 'MENU', favorites: 'Favoris', view: 'Voir', search: 'Recherche', cart: 'Panier', country: 'Pays' },
  de: { menu: 'MENÜ', favorites: 'Favoriten', view: 'Ansehen', search: 'Suche', cart: 'Warenkorb', country: 'Land' },
  es: { menu: 'MENÚ', favorites: 'Favoritos', view: 'Ver', search: 'Buscar', cart: 'Carrito', country: 'País' },
}



function App() {
  const [favorites, setFavorites] = useState([])
  const [country, setCountry] = useState('IN')

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.title === item.title)
      if (exists) {
        return prev.filter((f) => f.title !== item.title)
      }
      return [...prev, item]
    })
  }

  const favValue = useMemo(() => ({ favorites, toggleFavorite }), [favorites])
  const language = languagesMap[country] || 'en'
  const t = useCallback((key) => (translations[language] && translations[language][key]) || key, [language])
  const i18nValue = useMemo(() => ({ country, language, setCountry, t }), [country, language, t])

  return (
    <>
      <BrowserRouter>
        <Navigation favoritesCtx={favValue} i18nCtx={i18nValue} />
        <Routes>
          <Route path="/" element={<AllComponents favoritesCtx={favValue} i18nCtx={i18nValue} />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites favoritesCtx={favValue} i18nCtx={i18nValue} />} />
          <Route path="/product/:slug" element={<Product favoritesCtx={favValue} i18nCtx={i18nValue} />} />
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
