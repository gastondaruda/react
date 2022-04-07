import { useCartContext } from "../../Context/CartContext"
import React, {useState} from "react"
import {getFirestore, collection, queryCollection, addDoc} from "firebase/firestore"
import "./pay.css"

function FormaDePago() {
    const {cartList, totalPrecio,Iva, totalPrecioMasIva, totalPorProducto, vaciarCarrito} = useCartContext()
    
    const endBuy = () => {
        alert("Gracias por su compra")
        let order = {}

        order.buyer = {name: name + " " + lastName, email: email, phone: phone}
        order.total =  totalPrecioMasIva()  
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.cantidad
            return {id, name, price}
        })

        const dataB = getFirestore()
        const queryCollection = collection(dataB, "orders")
        addDoc(queryCollection, order)
        .then(({ id  }) => alert("tu orden de compra es " + id))


        console.log(order)
    }


    const [name, setName] = useState()
    const handleInputChange = ({target}) => {
        setName(target.value)
    }
    const [lastName, setLastName] = useState()
    const handleLastName = ({target}) => {
        setLastName(target.value)
    }
    const [email, setEmail] = useState()
    const handleEmail = ({target}) => {
        setEmail(target.value)
    }

    const [phone, setPhone] = useState()
    const handlePhone = ({target}) => {
        setPhone(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }


    
    return (<div className="section-form">

            <h1 className="Api dancing" >Finalizar compra</h1>
            
                
            
            
        
        <div className="TuPedido">
            <h3 className="dancing pedido-title">Tu pedido</h3>
            {
                cartList.length ===  0 ? 
                <h3 className="container-pedido">No hay productos seleccionados</h3>
                :
                <>
                <div className="flex row">
                    <form action="" method="" className="questrial text form" onSubmit={handleSubmit}>
                    <h1 className="dancing pedido-title">Detalles De Facturación</h1>
                        <ul className="ul">
                            <li className="flex row">
                                <div className="flex column f-start">
                                    <label for="name" className="">Nombre<span>*</span></label>
                                    <input type="text" id="name" name="name" className="border text" value={name} onChange={handleInputChange} required></input>
                                </div>
                                
                                    
                                <div className="flex column f-start">
                                    <label for="lastName" className="column">Apellido<span>*</span></label>
                                    <input type="text" id="lastname" name="lastName" className="border text" value={lastName} onChange={handleLastName} required></input>
                                </div>
                                
                            </li>
                            
                            <li className="flex column f-start">
                                <label>Telefóno<span>*</span></label>
                                <input type="text" className="border text" value={phone} onChange={handlePhone}></input>
                            </li>
                            <li className="flex column f-start">
                                <label for="mail">Dirección de correo electrónico<span>*</span></label>
                                <input type="email" id="mail" name="user_mail" className="border text" value={email} onChange={handleEmail}required></input>
                            </li>

                            {
                                    /*
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
                            */
                        }
                            </ul>
                            <input type="submit" value="Comprar" className="btn-add btn-buy" onClick={() => {
                                                                                                    endBuy();
                                                                                                    
                                                                                                }}></input>
                                                                                            
                        {/*<button type="submit">Comprar</button>*/}
                </form>
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
                            </div>
                </>
            }
            
                            </div>
        </div>
    
    )
}

export default FormaDePago