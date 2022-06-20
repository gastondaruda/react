import React from 'react'
import { useCartContext } from "../../Context/CartContext"

function CartWidget() {
    const { cartList, numberWidget,totalPrice } = useCartContext()

    return (<div className='widget flex'>
                <i class='bx bxs-cart'></i>
                {
                    cartList.length === 0 ?
                    <p></p>
                    :
                    <div className='div_total flex row'>
                        <p className='bx-number questrial'>{numberWidget()}</p>
                        <p className='price_navbar questrial'>Total: ${totalPrice()}</p>
                    </div>
                }
                
            </div>
    )
}

export default CartWidget