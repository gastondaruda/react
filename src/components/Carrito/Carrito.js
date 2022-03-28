import { useCartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./carrito.css"



function Carrito() {
    const { cartList, vaciarCarrito } = useCartContext()
    
    const [inputType , setInputType ] = useState('button')
    
    console.log(cartList)


    return (
        <div className="carrito-container">
            <h3 className="Lora cart-title">Mi pedido</h3>
            {inputType === 'input' ?
            <>
                <h3>Carrito Vacío</h3>
            <Link to="/">
                <button className="btn-add carrito">Ver productos</button> 
            </Link>
            </>
            : 
            cartList.map(prod =><div className="cart-map questrial">
                                        <img className="img-cart" src={prod.url}></img> 
                                        <p>ID: {prod.id}</p>
                                        <p className="li-cart">{prod.nombre}</p>
                                        <p className="price-cart">${prod.precio}</p>
                                        <p className="cant-cart">Cantidad: <span className="cant">{prod.cantidad}</span></p>
                                        <button className="btn-add carrito">Eliminar producto</button>
                                    <Link to="/">
                                        <button className="btn-add carrito">Ver productos</button> 
                                    </Link>
                                    </div>)}
                                    <button className="btn-add carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
  }
  
  export default Carrito