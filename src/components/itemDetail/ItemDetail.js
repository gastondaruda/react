
import ItemCount from '../itemCount/ItemCount';
import { Link } from "react-router-dom";
import { useState } from "react";

const BtnCount = ({handleInter})=> {
  return <button className="btn-add questrial" onClick={handleInter}>Agregar al carrito</button>
}

const InputCount = () => {
  return (
      <Link to="/Carrito">
          <button className="btn-add questrial">Ir al Carrito</button>
      </Link>
  )
}

function ItemDetail({producto}) {
    const [inputType , setInputType ] = useState('button')
    const handleInter = () => {
        setInputType('input')
    }
    return (
      <div className="itemDetail">
            <img className="image-detail" src={producto.url} alt = 'imagen' />
            <div className="detail-flex">
              <h5 className='p-detail lora'>{producto.nombre}</h5>
              <p className="text-detail questrial">"lorem lorem lorem lorem lorem"</p>
              <h3 className='card-precio questrial'>${producto.precio}</h3>
              
              {
                inputType === 'button' ?
                <>
                    <ItemCount stock={producto.stock}/>
                    <BtnCount handleInter={handleInter} />
                </>
                :
                <InputCount />
              }
            </div>
      </div>
    )
  }


  export default ItemDetail
  