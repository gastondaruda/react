import { useCartContext } from "../../Context/CartContext"
import Title from "../Title/Title"
import { Link } from "react-router-dom"
import "./shopCart.css"
import empty from "../../assets/imagenes/empty-cart.png"



function ShopCart() {
    const { cartList, emptyCart, deleteProd, totalPrice } = useCartContext()
    
    return (
        <div className="carrito-container flex column">
            <Title title="Mi pedido"/>
            {
                cartList.length ===  0 ?
            <div className="flex column">
                <img className="empty-cart" src={empty} alt=""></img>
                <Link to="/">
                    <button className="btn-add cart">Ver productos</button> 
                </Link>
            </div>
            :
            <>
            {cartList.map(prod =><>
                                    <div className="cart-map questrial">
                                        <img className="img-cart" src={prod.image1} alt={prod.name}></img>
                                        <p className="li-cart">{prod.name}</p>
                                        <p className="price-cart">${prod.price} c/u</p>
                                        <p className="cant-cart">Cantidad: <span className="amount">{prod.quantity}</span></p>
                                        <button className="btn-add cart lato" onClick={() => deleteProd(prod.id)}>Eliminar producto</button>
                                    </div>
                                </>
                                )}
                                    <p className="flex questrial">Total del carrito: <span className="amount">${totalPrice()}</span></p>
                                    <div className="flex row">
                                        <button className="btn-add cart lora" onClick={emptyCart}>Vaciar Carrito</button>
                                        <Link to="/">
                                            <button className="btn-add cart lora">Ver productos</button> 
                                        </Link>
                                        <Link to="/payment">
                                            <button className="btn-add btn-buy lora">Finalizar Compra</button>
                                        </Link>
                                    </div>
                                </>}
                            </div>
                        )
                    }

export default ShopCart