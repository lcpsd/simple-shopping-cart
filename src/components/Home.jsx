import { Navbar } from "./Navbar";
import { Products } from "./Products";
import {Cart} from '../components/Cart'


export function Home(){

    return(
        <div>
            <Navbar/>
            <Products/>
            <Cart/>
        </div>
    )
}