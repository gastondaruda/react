import { createContext, useContext, useState } from "react"
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item) => {
        // repita duplicado
        const foundItem = cartList.find(itemCart => itemCart.id === item.id)

        if(foundItem){
            foundItem.cantidad += item.cantidad;
            setCartList([...cartList])
        }else {
            setCartList([ ...cartList, item])
        }        
    }
        const eliminarProducto = (id) => {
        const deleteItem = cartList.filter(itemCart => itemCart.id !== id)
        setCartList(deleteItem)
    }
    const totalPrecio = () => {
        return cartList.reduce((acc, value) => acc + value.precio*value.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            eliminarProducto,
            totalPrecio
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
