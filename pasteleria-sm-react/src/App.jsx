import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Orders from './pages/Orders'
import CustomOrders from './pages/CustomOrders'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="pedidos" element={<Orders />} />
        <Route path="personalizados" element={<CustomOrders />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
