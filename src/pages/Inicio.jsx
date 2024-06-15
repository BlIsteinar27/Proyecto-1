import React from 'react'
import Carrusel from '../components/Carrusel'
import Hero from '../components/Hero'

const Inicio = () => {
  return (
    <>
        <Carrusel/>
        <div className='container'>
          <h1 className='text-center py-3'>Inicio</h1>
          <Hero/>
        </div>
    </>
  )
}

export default Inicio