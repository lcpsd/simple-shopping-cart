import { CartCounter } from "./CartCounter";
import '../styles/navbar.scss'

export function Navbar(){

    return(
        <div className="navbar">
            <CartCounter/>
        </div>
    )
}