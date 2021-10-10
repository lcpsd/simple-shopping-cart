import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartContextProvider(props){

    const [cartItems, setCartItems] = useState([])
    const [cartIsVisibe, setCartVisibility] = useState(false)

    let cartSum = 0
    cartItems.map(item => cartSum += parseFloat(item.value)*item.itemQty)
    

    return(
        <CartContext.Provider value={{cartItems, setCartItems, cartIsVisibe, setCartVisibility, cartSum}}>
            {props.children}
        </CartContext.Provider>
    )
}