import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import NavBar from './components/Navbar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Local from './pages/Local'
import NotFound from './components/NotFound'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (qty = 1) => {
    setCartCount((prev) => prev + qty)
  }

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />

      <Routes>
        {/* HOME - Catálogo completo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a Tempo Coffee" />}
        />

        {/* Catálogo por categoría (ruta dinámica) */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Explorá la categoría" />}
        />

        {/* Detalle por ID (ruta dinámica) */}
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer onAddToCart={handleAddToCart} />}
        />

        <Route 
          path="/local" 
          element={<Local />} 
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App