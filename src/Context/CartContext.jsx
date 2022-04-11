import { createContext, useContext, useState } from "react"
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item) => {
        const foundItem = cartList.find(itemCart => itemCart.id === item.id)

        if(foundItem){
            foundItem.quantity += item.quantity;
            setCartList([...cartList])
        }else {
            setCartList([ ...cartList, item])
        }        
    }

    const deleteProd = (id) => {
    const deleteItem = cartList.filter(itemCart => itemCart.id !== id)
    setCartList(deleteItem)
    }
    const totalOneProd = (id) => {
        const itemFilter = cartList.filter(itemCart => itemCart.id === id)
        return itemFilter.reduce((acc, value) => acc + value.price*value.quantity, 0)
    }
    const totalPrice = () => {
        return cartList.reduce((acc, value) => acc + value.price*value.quantity, 0)
    }
    const Iva = () => {
        let iva = cartList.reduce((acc, value) => acc + value.price*value.quantity*21/100, 0)
        return iva.toFixed(0)
    }
    const totalPricePlusIva = () => {
        let TotalPlusIva = cartList.reduce((acc, value) => acc + value.price*value.quantity+value.price*value.quantity*21/100, 0)
        return TotalPlusIva.toFixed(0);
    }

    const emptyCart = () => {
        setCartList([])
    }

    const numberWidget = () => {
        return cartList.reduce((acc, value) => acc + value.quantity, 0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            deleteProd,
            totalOneProd,
            Iva,
            totalPrice,
            totalPricePlusIva,
            numberWidget
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
