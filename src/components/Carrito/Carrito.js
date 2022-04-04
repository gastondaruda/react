import { useCartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./carrito.css"
import empty from "../../assets/imagenes/empty-cart.png"



function Carrito() {
    const { cartList, vaciarCarrito, eliminarProducto, totalPrecio } = useCartContext()
    
    return (
        <div className="carrito-container">
            <h3 className="dancing cart-title">Mi pedido</h3>
            {
                cartList.length ===  0 ?
            <div className="empty-div">
                <img className="empty-cart" src={empty} alt=""></img>
                <Link to="/">
                    <button className="btn-add carrito">Ver productos</button> 
                </Link>
            </div>
            :
            <>
            {cartList.map(prod =><>
                                    <div className="cart-map questrial">
                                        <img className="img-cart" src={prod.image1} alt=""></img>
                                        <p className="li-cart">{prod.name}</p>
                                        <p className="price-cart">${prod.price} c/u</p>
                                        <p className="cant-cart">Cantidad: <span className="cant">{prod.cantidad}</span></p>
                                        <button className="btn-add carrito" onClick={() => eliminarProducto(prod.id)}>Eliminar producto</button>
                                    </div>
                                    
                                    </>
                                    )}
                                    <p>Total del carrito: <span className="cant">${totalPrecio()}</span></p>
                                    <button className="btn-add carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                                    <Link to="/">
                                        <button className="btn-add carrito">Ver productos</button> 
                                    </Link>
                                    <Link to="/FormaDePago">
                                        <button className="btn-add btn-buy">Finalizar Compra</button>
                                    </Link>

                                    </>}
        </div>
    )
}

export default Carrito