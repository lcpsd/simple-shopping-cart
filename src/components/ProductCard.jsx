import useCart from "../hooks/useCart"
import {ButtonAdd} from '../components/ButtonAdd'
import { useState } from "react"

export function ProductCard({product}){

    const {cartItems, setCartItems} = useCart([])
    const [itemQty, setItemQuantity] = useState(0)

    function handleSetProductToCart(event, obj){
        event.preventDefault()

        const added = cartItems.some(item => item.id === obj.id)

        if(!added) setCartItems([...cartItems, obj])
        return
    }

    return(
        <div>
            <form key={product.id} onSubmit={(event) => handleSetProductToCart(event, {...product, itemQty})}>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <img src={product.thumb} alt="" />
                <div>{product.value}</div>
                <input type="number" onChange={event => setItemQuantity(event.target.value)} />
                <ButtonAdd type="submit"/>
            </form>
        </div>
    )
}