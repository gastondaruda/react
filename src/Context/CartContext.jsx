import { createContext, useContext, useState } from "react"
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item) => {
        // repita duplicado
        const foundItem = cartList.find(item => cartList.id === item.id)
        console.log(cartList)

        if(foundItem){
            foundItem.cantidad += item.cantidad;
            setCartList([...cartList])
            console.log("si es el mismo producto")
        }else {
            setCartList([ ...cartList, item])
            console.log("No es el mismo")
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
