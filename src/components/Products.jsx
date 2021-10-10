import axios from "axios"
import { useEffect } from "react"
import {useProductList} from "../hooks/useProductsList"
import { ProductCard } from "./ProductCard"
import '../styles/products.scss'
import useCart from "../hooks/useCart"

export function Products(){

    const {productList, setProductList} = useProductList()
    const {cartIsVisibe, setCartVisibility} = useCart()

    function toggleCartVisibility(){
        if(cartIsVisibe) setCartVisibility(false)
    }

    useEffect(() => {
        axios.get("http://localhost:3001/products")
        .then((response) => setProductList(response.data))
    }, [setProductList])


    return(
        <div id="products" onClick={()=> toggleCartVisibility()}>
            {  
                productList.length ? 
                productList.map(product => {
                        return (
                            <ProductCard key={product.id} product={product}/>
                        )
                }) : <div></div>
            }
        </div>
    )
}