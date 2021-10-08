import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartContextProvider(props){

    const [cartItems, setCartItems] = useState([])
    const [cartIsVisibe, setCartVisibility] = useState(false)

    return(
        <CartContext.Provider value={{cartItems, setCartItems, cartIsVisibe, setCartVisibility}}>
            {props.children}
        </CartContext.Provider>
    )
}