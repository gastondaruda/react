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

function ItemDetail({prod, initial}) {
  const {addToCart} = useCartContext()
  
  const onAdd = (cant, id) => {
    setInputType('input')
    addToCart({ ...prod, cantidad: cant, id: prod.id })
  }

    const [inputType , setInputType ] = useState('button')
    
    return ( 
      
      <div className="itemDetail">
            <img className="image-detail" src={prod.image1} alt = 'imagen' />
            <div className="detail-flex">
              <h5 className='p-detail lora'>{prod.name}</h5>
              <p className="text-detail questrial">{prod.description}</p>
              <h3 className='card-precio questrial'>${prod.price}</h3>
              
              {
                inputType === 'button' ?
                <>
                    
                    <BtnCount  stock={prod.stock} onAdd={onAdd} />
                </>
                :
                <InputCount />
              }
            </div>
      </div>
    )
  }


  export default ItemDetail