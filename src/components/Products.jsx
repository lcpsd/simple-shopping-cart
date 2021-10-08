import axios from "axios"
import { useEffect, useState } from "react"
import useCart from "../hooks/useCart"
import {ButtonAdd} from '../components/ButtonAdd'

export function Products(){

    const {cartItems, setCartItems} = useCart([])
    
    const [productList, setProductList] = useState([])

    const [itemQty, setItemQuantity] = useState(0)
    
    function handleSetProductToCart(event, obj){
        event.preventDefault()

        const added = cartItems.some(item => item.id === obj.id)

        if(!added) setCartItems([...cartItems, obj])
        return
    }

    useEffect(() => {
        axios.get("http://localhost:3001/products").then(({data}) => {

        setProductList(data)
    })
    },[])

    return(
        <div>
            {  
                productList.map(product => {

                    if(product){
                        return (
                            <form key={product.id} onSubmit={(event) => handleSetProductToCart(event, {...product, itemQty})}>
                                <div>{product.title}</div>
                                <div>{product.description}</div>
                                <img src={product.thumb} alt="" />
                                <div>{product.value}</div>
                                <input type="number" onChange={event => setItemQuantity(event.target.value)} />
                                <ButtonAdd type="submit"/>
                            </form>
                        )
                    }
                    
                    return <div></div>
                })
            }
        </div>
    )
}