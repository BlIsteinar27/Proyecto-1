import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import Hero1 from '../assets/hero1.jpg'

const Hero = () => {
  return (
    <>
        <div className="px-4 py-5 my-5 text-center">
            <div>
                <img className="d-block mx-auto mb-4" src={logo} alt width={200} />
            </div>
            <h1 className="display-5 fw-bold text-body-emphasis">AR Market</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    <b>¡Bienvenido a ArMarket, la tienda online donde tus sueños se hacen realidad! Aquí en ArMarket, creemos que cada compra es una oportunidad para descubrir algo nuevo, emocionante y único. Nuestro objetivo es brindarte una experiencia de compra en línea excepcional, donde encontrarás todo lo que necesitas y más.</b>
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/tienda" className="btn btn-outline-danger btn-lg px-4 gap-3">Tienda</Link>
                <Link to="/contactos" className="btn btn-outline-warning btn-lg px-4">Contactanos</Link>
                </div>
            </div>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={Hero1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Imagina un lugar donde puedas explorar una amplia gama de productos</h1>
                <p className="lead">
                    desde ropa y accesorios de moda hasta artículos para el hogar y electrónica de última generación. En ArMarket, hemos reunido cuidadosamente una selección de productos de alta calidad de las marcas más confiables para que tengas la tranquilidad de que estás obteniendo lo mejor de lo mejor.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start text-center">
                    <Link to="/tienda" className="btn btn-outline-info btn-lg px-4 me-md-2">Tienda</Link>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero