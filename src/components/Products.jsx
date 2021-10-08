import axios from "axios"
import { useEffect, useState } from "react"
import useCart from "../hooks/useCart"
import {ButtonAdd} from '../components/ButtonAdd'

export function Products(){

    const {cartItems, setCartItems} = useCart()
    
    const [productList, setProductList] = useState([])
    
    function handleSetProductToCart(event, obj){
        event.preventDefault()
        setCartItems([...cartItems, obj])
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
                            <form key={product.id} onSubmit={(event) => handleSetProductToCart(event, product)}>
                                <div>{product.title}</div>
                                <div>{product.description}</div>
                                <img src={product.thumb} alt="" />
                                <div>{product.value}</div>
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