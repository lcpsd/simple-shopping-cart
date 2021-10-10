import useCart from "../hooks/useCart"
import {ButtonAdd} from '../components/ButtonAdd'
import { useState } from "react"
import '../styles/productCard.scss'

export function ProductCard({product}){

    const {cartItems, setCartItems} = useCart([])
    const [itemQty, setItemQuantity] = useState(1)

    function handleSetProductToCart(event, obj){
        event.preventDefault()

        const added = cartItems.some(item => item.id === obj.id)

        if(!added) return setCartItems([...cartItems, obj])
        
        return window.confirm("Item já adicionado!")
    }

    function handlePreventUserKeydown(event){
        event.target.value = 0
    }

    return(
        <form className="product-card" 
        onSubmit={(event) => handleSetProductToCart(event, {...product, itemQty})
        }>
            <div className="product-card-info" key={product.id} >
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img src={product.thumb} alt="" />
                <div className="product-price">{product.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                <input type="number" min="1" max="5"
                onChange={event => setItemQuantity(event.target.value)} 
                onKeyDown={(event) => handlePreventUserKeydown(event)}
                value={itemQty}
                />
            </div>
            <ButtonAdd type="submit"/>
        </form>
    )
}