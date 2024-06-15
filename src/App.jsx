
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Tienda from './pages/Tienda'
import Categorias from './pages/Categorias'
import Contactos from './pages/Contactos'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="*" element={<Inicio/>} />
            <Route path="/" element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/categorias/:cat/:id" element={<Categorias/>} />
            
            <Route path="/contactos" element={<Contactos/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
