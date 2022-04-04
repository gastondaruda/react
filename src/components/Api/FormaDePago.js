import { useCartContext } from "../../Context/CartContext"
import "./pay.css"

function FormaDePago() {
    const {cartList, totalPrecio,Iva, totalPrecioMasIva, totalPorProducto} = useCartContext()
    

    
    return (<div className="section-form">

            <h1 className="Api dancing">Finalizar compra</h1>
            <div className="flex row">
                
            
            <form action="" method="" className="questrial text form">
            <h1 className="dancing pedido-title">Detalles De Facturación</h1>
                <ul className="ul">
                    <li className="flex row">
                        <div className="flex column f-start">
                            <label for="name" className="">Nombre<span>*</span></label>
                            <input type="text" id="name" name="user_name" className="border text" required></input>
                        </div>
                        <div className="flex column f-start">
                            <label for="name" className="column">Apellido<span>*</span></label>
                            <input type="text" id="lastname" name="user_name" className="border text" required></input>
                        </div>
                    </li>
                    <li className="flex column f-start">
                        <label>Telefóno<span>*</span></label>
                        <input type="text" className="border text"></input>
                    </li>
                    <li className="flex column f-start">
                        <label for="mail">Dirección de correo electrónico<span>*</span></label>
                        <input type="email" id="mail" name="user_mail" className="border text" required></input>
                    </li>
                    <li className="flex column f-start">
                        <label for="">Dirección de la calle<span>*</span></label>
                        <input type="text" id="" name="" className="border text" required></input>
                    </li>
                    <li className="flex column f-start">
                        <label for="">Localidad / Ciudad<span>*</span></label>
                        <input type="text" id="" name="" className="border text" required></input>
                    </li>
                    <li className="flex column f-start">
                        <label for="">Código postal<span>*</span></label>
                        <input type="text" id="" name="" className="border text" required></input>
                    </li>
                    <li className="flex column f-start">
                        <label for="">Número de tarjeta<span>*</span></label>
                        <input type="text" id="" name="" className="border text" required></input>
                    </li>
                    <li className="flex row">
                        <div className="flex column f-start">
                            <label for="name" className="column">Código de seguridad<span>*</span></label>
                            <input type="text" id="lastname" name="user_name" className="border text" required></input>
                        </div>
                        <div className="flex column f-start">
                            <label for="name" className="column">Código de seguridad<span>*</span></label>
                            <input type="text" id="lastname" name="user_name" className="border text" required></input>
                        </div>
                    </li>
                    </ul>
                    <input type="submit" value="Comprar" className="btn-add btn-buy"></input>
                </form>
        
        <div className="TuPedido">
            <h3 className="dancing pedido-title">Tu pedido</h3>
            {
                cartList.length ===  0 ? 
                <h3 className="container-pedido">No hay productos seleccionados</h3>
                :
                <div className="container-pedido">
            {cartList.map(prod =><>
                                    <div className="dancing flex column">
                                        <div className="flex row between div-pedido">
                                            <p className="pedido-p">{prod.name} x <span className="">{prod.cantidad}</span> </p>
                                            <p className="pedido-p">${totalPorProducto(prod.id)}</p>
                                        </div>
                                        </div></>
                                    )}
                                    <div className="dancing"> <div className="flex row between div-pedido">
                                            <p className="pedido-p">Subtotal</p>
                                            <p className="pedido-p color">${totalPrecio()}</p>
                                        </div>
                                        <div className="flex row between div-pedido"><p className="pedido-p">Iva (21%)</p>
                                            <p className="pedido-p ">${Iva()}</p>
                                        </div>
                                        <div className="flex row between div-pedido">
                                            <p className="pedido-p">Total</p>
                                            <p className="pedido-p color total">${totalPrecioMasIva()}</p>
                                        </div>
                                    </div>
                                </div>
            }
            
                            </div>
        </div>
    </div>
    )
}

export default FormaDePago