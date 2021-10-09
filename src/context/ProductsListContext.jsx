import { createContext, useState } from "react";

export const ProductsListContext = createContext([])

export function ProductsListProvider(props){

    const [productList, setProductList] = useState([])

    return(
        <ProductsListContext.Provider value={{productList, setProductList}}>
            {props.children}
        </ProductsListContext.Provider>
    )
}