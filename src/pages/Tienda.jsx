import { useEffect, useState } from "react";
import Card from "../components/Card";


const API='https://arsistemaweb.com/api/productos?pagina=1';


const Tienda = () => {

  const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data.productos);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);

  return (
    <>
      <div className="container">
        <h1 className="text-center py-4">Todos los productos ({datos.length})</h1>
        <div className="row">
          {datos && datos.map((item)=>(
                    <Card key={item.id} producto={item}/>
                  ))}
        </div>
      </div>
    </>
  )
}

export default Tienda