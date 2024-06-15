
const ruta = 'https://arsistemaweb.com/img/'

const Detalle = ({producto}) => {
  return (
    <>
        <div className="modal fade" id={producto.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{producto.nombre}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={ruta+producto.imagen} alt={producto.nombre} className="img-fluid img-thumbnail p-0" />
                        </div>
                        <div className='col-md-8'>
                            <h3>{producto.nombre}</h3>

                            <p className="lead">
                                
                                <br/><b>Categoria: </b>{producto.categoria}
                                <br/><b>Stock: </b><span className="badge bg-info">{producto.stock}</span>                                
                            </p>
                            <p className='lead small'><b>Descripción: </b>{producto.descripcion}</p>

                            <h3 className="text-danger"><b>Precio: </b>{producto.precio}$</h3>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Detalle