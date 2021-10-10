import { Navbar } from "./Navbar";
import { Products } from "./Products";
import {Cart} from '../components/Cart'
import { ProductsListProvider } from "../context/ProductsListContext";
import { Alert } from "./Alert";
import { AlertContextProvider } from "../context/AlertContext";
import { useAlert } from "../hooks/useAlert";

export function Home(){

    const {message} = useAlert()

    return(
        <div className="container-global">

            <AlertContextProvider>
                <Alert message={message}/>
                <ProductsListProvider>
                    <Navbar/>
                    <Products/>
                    <Cart/>
                </ProductsListProvider>
            </AlertContextProvider>
        </div>
    )
}