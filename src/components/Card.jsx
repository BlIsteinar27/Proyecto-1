import React from 'react'
import Detalle from './Detalle'
const ruta = 'https://arsistemaweb.com/img/'

const Card = ({producto}) => {
  return (
    <>
        <div className='col-md-4 col-lg-3 mb-4'>
            <div className='card h-100' data-bs-theme="dark">
                <div className='card-header p-0'>
                    <img src={ruta+producto.imagen} alt={producto.nombre}  className="img-fluid" />
                </div>
                <div className='card-body text-center'>
                    <h5>{producto.nombre}</h5>
                    <p className="text-success">{producto.categoria}</p>
                    <h5 className="text-danger">{producto.precio}$</h5>
                </div>      
                <div className='card-footer text-center'>
                    <a href="#" className='btn btn-danger'data-bs-toggle="modal" data-bs-target={`#${producto.id}`}>Detalle</a>
                </div>
            </div>
        </div>

        <Detalle key={producto.id} producto={producto}/>
    </>
  )
}

export default Card