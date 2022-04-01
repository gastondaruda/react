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
    const totalPorProducto = (id) => {
        const itemFilter = cartList.filter(itemCart => itemCart.id === id)
        return itemFilter.reduce((acc, value) => acc + value.precio*value.cantidad, 0)
    }
    const totalPrecio = () => {
        return cartList.reduce((acc, value) => acc + value.precio*value.cantidad, 0)
    }
    const Iva = () => {
        let iva = cartList.reduce((acc, value) => acc + value.precio*value.cantidad*21/100, 0)
        return iva.toFixed(0)
    }
    const totalPrecioMasIva = () => {
        let TotalMasIva = cartList.reduce((acc, value) => acc + value.precio*value.cantidad+value.precio*value.cantidad*21/100, 0)
        return TotalMasIva.toFixed(0);
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const numberWidget = () => {
        return cartList.reduce((acc, value) => acc + value.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            eliminarProducto,
            totalPorProducto,
            Iva,
            totalPrecio,
            totalPrecioMasIva,
            numberWidget
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
