import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API='https://arsistemaweb.com/api/categorias';

const FiltroCategorias = () => {
    
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);

  return (
    <>
        {datos && datos.map((item) => (
            <li key={item.id}><Link to={`/categorias/${item.categoria}/${item.id}`} className="dropdown-item" href="#">{item.categoria}</Link></li>
        ))}
    </>
  )
}

export default FiltroCategorias