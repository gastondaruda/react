import React from 'react'
import { useCartContext } from "../../Context/CartContext"

function CartWidget() {
    const { cartList, numberWidget } = useCartContext()

    return (<div className='widget'>
                <i class='bx bxs-cart'></i>
                {
                    cartList.length === 0 ?
                    <p></p>
                    :
                    <p className='bx-number'>{numberWidget()}</p>
                }
                
            </div>
    )
}

export default CartWidget