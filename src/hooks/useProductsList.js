import { useContext } from "react";
import { ProductsListContext } from "../context/ProductsListContext";

export function useProductList(){
    return useContext(ProductsListContext)
}