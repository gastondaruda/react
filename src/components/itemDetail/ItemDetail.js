import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import BtnCount from "../BtnCount/BtnCount";
import InputCount from "../BtnCount/InputCount";
import "./itemDetail.css";

function ItemDetail({prod}) {
  const {addToCart} = useCartContext()
  
  const onAdd = (quantity) => {
    setInputType('input')
    addToCart({ ...prod, quantity: quantity, id: prod.id })
  }

    const [inputType , setInputType ] = useState('button')
    
    return ( 
        <div className="itemDetail">
            <img className="image-detail" src={prod.image1} alt = 'imagen' />
            <div className="detail-flex">
              <h5 className='p-detail lora'>{prod.name}</h5>
              <p className="text-detail questrial">{prod.description}</p>
              <h3 className='card-price questrial'>${prod.price}</h3>
                
              {
                inputType === 'button' ?
                <>
                  <BtnCount stock={prod.stock} onAdd={onAdd} />
                </>
                :
                  <InputCount />
              }
            </div>
      </div>
    )
  }


  export default ItemDetail