import { useCartContext } from "../../Context/CartContext"
import React, {useState } from "react"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Title from "../Title/Title";
import {getFirestore, collection, addDoc} from "firebase/firestore"
import swal from "sweetalert"
import "./pay.css"




function Payment() {
    const {cartList, totalPrice,Iva, totalPricePlusIva, totalOneProd} = useCartContext()
    


    const endBuy = (e) => {
        e.preventDefault();
        
        let order = {}

        order.buyer = {name: name + " " + lastName, email: email, phone: phone}
        order.total =  totalPricePlusIva()  
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.quantity
            return {id, name, price}
        })

        const dataB = getFirestore()
        const queryCollection = collection(dataB, "orders")
        addDoc(queryCollection, order)
        .then(({ id }) => swal({
                                title: "Muchas gracias por su compra. Le enviamos un mail de confirmación.",
                                text: "Su numero de order es" + id,
                                icon: "success",
                                button: "aceptar"
                                }))
                                
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
    

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tn628bf', 'template_03feoag', e.target, '_i46DAMHZ2eQo8mRR')
            .then((result) => {
                
            }, (error) => {
                
            });
        }

    
    
    return (
            <div className="section-form">

            <Title title="Finalizar compra"/>
            
        <div className="TuPedido">
            <Title title="Tu pedido"/>
            
            {
                cartList.length ===  0 ? 
                <h3 className="container-pedido flex">No hay productos seleccionados</h3>
                :
                <>
                <div className="flex row">
                    <form ref={form} className="questrial text form" id="formulario" onSubmit={(e) =>{  endBuy(e);
                    sendEmail(e)}}>
                        <Title title="Detalles De Facturación" />
                            <ul className="ul">
                                <li className="flex row">
                                    <div className="flex column f-start">
                                        <label for="name" className="">Nombre<span>*</span></label>
                                        <input
                                            type="text"
                                            className="border text"
                                            name="name"
                                            value={name}
                                            onChange={handleInputChange}
                                            maxlength="19"
                                            required>
                                        </input>
                                    </div>
                                    
                                        
                                    <div className="flex column f-start">
                                        <label for="lastName" className="column">Apellido<span>*</span></label>
                                        <input 
                                            type="text"
                                            id="lastname"
                                            name="lastName"
                                            className="border text"
                                            maxlength="15"
                                            value={lastName}
                                            onChange={handleLastName}
                                            required
                                            autocomplete="off">
                                        </input>
                                    </div>
                                    
                                </li>
                                
                                <li className="flex column f-start">
                                    <label>Telefóno<span>*</span></label>
                                    <input 
                                        type="text"
                                        className="border text"
                                        maxlength="10"
                                        value={phone}
                                        onChange={handlePhone}>
                                    </input>
                                </li>
                                <li className="flex column f-start">
                                    <label for="mail">Dirección de correo electrónico<span>*</span></label>
                                    <input
                                        type="email"
                                        id="mail"
                                        name="email"
                                        className="border text"
                                        value={email}
                                        onChange={handleEmail}
                                        required>
                                    </input>
                                </li>
                            </ul>
                        <input
                            type="submit"
                            value="Comprar"
                            className="btn-add btn-buy">
                        </input>
                    </form>
                <div className="container-pedido">
                    <Title title="Resumen" />
            {cartList.map(prod =><>
                                    <div className="dancing flex column">
                                        <div className="flex row between div-pedido">
                                            <p className="pedido-p">{prod.name} x <span className="">{prod.quantity}</span> </p>
                                            <p className="pedido-p">${totalOneProd(prod.id)}</p>
                                        </div>
                                        </div></>
                                    )}
                                    <div className="dancing"> <div className="flex row between div-pedido">
                                            <p className="pedido-p">Subtotal</p>
                                            <p className="pedido-p color">${totalPrice()}</p>
                                        </div>
                                        <div className="flex row between div-pedido"><p className="pedido-p">Iva (21%)</p>
                                            <p className="pedido-p ">${Iva()}</p>
                                        </div>
                                        <div className="flex row between div-pedido">
                                            <p className="pedido-p">Total</p>
                                            <p className="pedido-p color total">${totalPricePlusIva()}</p>
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

export default Payment



