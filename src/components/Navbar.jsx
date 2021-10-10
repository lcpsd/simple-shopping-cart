import { CartCounter } from "./CartCounter";
import '../styles/navbar.scss'
import useCart from "../hooks/useCart"

export function Navbar(){

    const {cartIsVisibe, setCartVisibility} = useCart()

    function toggleCartVisibility(){
        if(cartIsVisibe) setCartVisibility(false)
    }

    return(
        <div className="navbar"onClick={()=> toggleCartVisibility()}>
            <CartCounter/>
        </div>
    )
}