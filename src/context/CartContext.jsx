import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartContextProvider(props){

    const [cartItems, setCartItems] = useState({})

    return(
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}