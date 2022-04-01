import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";

import BtnCount from "../itemCount/ItemCount";
import "./itemDetail.css";

const InputCount = () => {
  return (
    <div className="btn-div">
      <Link to="/">
        <button className="btn-add questrial">Seguir comprando</button>
      </Link>
      <Link to="/Carrito">
          <button className="btn-add carrito questrial">Ir al Carrito</button>
      </Link>
    </div>
  )
}

function ItemDetail({producto, initial}) {
  const {addToCart} = useCartContext()
  const [ count, setCount ] = useState(initial)
  
  const onAdd = (cant, id) => {
    setInputType('input')
    addToCart({ ...producto, cantidad: cant, id: producto.id })
  }

    const [inputType , setInputType ] = useState('button')
    
    return (
      <div className="itemDetail">
            <img className="image-detail" src={producto.url} alt = 'imagen' />
            <div className="detail-flex">
              <h5 className='p-detail lora'>{producto.nombre}</h5>
              <p className="text-detail questrial">{producto.description}</p>
              <h3 className='card-precio questrial'>${producto.precio}</h3>
              
              {
                inputType === 'button' ?
                <>
                    
                    <BtnCount  stock={producto.stock} onAdd={onAdd} />
                </>
                :
                <InputCount />
              }
            </div>
      </div>
    )
  }


  export default ItemDetail