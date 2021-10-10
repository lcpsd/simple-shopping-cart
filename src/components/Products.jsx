import axios from "axios"
import { useEffect } from "react"
import {useProductList} from "../hooks/useProductsList"
import { ProductCard } from "./ProductCard"
import '../styles/products.scss'

export function Products(){

    const {productList, setProductList} = useProductList()

    useEffect(() => {
        axios.get("http://localhost:3001/products")
        .then((response) => setProductList(response.data))
    }, [setProductList])


    return(
        <div>
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