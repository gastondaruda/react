import { createContext, useContext, useState } from "react"

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item) => {
        // repita duplicado
        const foundItem = cartList.find(cartList => item.id === cartList.id)
        
        if(foundItem){
            foundItem.cantidad += 1;
            setCartList([...cartList])
            console.log("1")
        }else {
            setCartList([ ...cartList, item])
            console.log("2")
        }

        
    }
            

    const vaciarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
