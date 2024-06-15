import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import FiltroCategorias from './FiltroCategorias'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-black fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/inicio" className="navbar-brand" href="#"><img src={logo} alt="" width={125}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/inico" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tienda" className="nav-link" href="#">Tienda</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu">
                        
                        <FiltroCategorias/>
                        
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactos" className="nav-link" href="#">Contactos</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                </form>
                </div>
                
            </div>
        </nav>
    </>
  )
}

export default Header