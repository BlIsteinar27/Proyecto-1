import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

//api
const API="https://arsistemaweb.com/api/productos?idcategoria=";
//ruta
const ruta = 'https://arsistemaweb.com/img/'

const Categorias = () => {

  const params = useParams()
  const [datos, setDatos] = useState([])

  const getDatos = async () =>{
    let URI=API+params.id 
      try {

        const response = await fetch(URI);
        const data = await response.json();
        //console.log(data)
        setDatos(data.productos);
      } catch (error) {
        console.error(error)
      }
    };


    useEffect(()=>{
      getDatos();
    },[params.id]);


  return (
    <>
      <div className="container">
        <h3 className="text-center py-3">{params.cat} ({datos.length})</h3>
        <div className="row">
          {datos && datos.map((item)=>(
                    <Card key={item.id} producto={item}/>
                  ))}
        </div>
      </div>
    </>
  )
}

export default Categorias