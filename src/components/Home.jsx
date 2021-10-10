import { Navbar } from "./Navbar";
import { Products } from "./Products";
import {Cart} from '../components/Cart'
import { ProductsListProvider } from "../context/ProductsListContext";

export function Home(){

    return(
        <div className="container-global">
            <ProductsListProvider>
                <Navbar/>
                <Products/>
                <Cart/>
            </ProductsListProvider>
        </div>
    )
}