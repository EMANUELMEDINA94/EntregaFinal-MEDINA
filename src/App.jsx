import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { CartProvider } from './context/CartContext.jsx'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Local from './pages/Local'
import NotFound from './components/NotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a Tempo Coffee" />}
          />

          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Explorá la categoría" />}
          />

          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
          
          <Route
            path="/local"
            element={<Local />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App