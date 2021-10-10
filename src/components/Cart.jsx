import useCart from "../hooks/useCart"
import {ButtonRemove} from "../components/ButtonRemove"
import arrowIcon from '../public/right-arrow.png'
import '../styles/cart.scss'
import { SumItems } from "./SumItems"

export function Cart(){

    const {setCartVisibility} = useCart()

    const {cartItems, cartIsVisibe, setCartItems} = useCart()

    let classVisible
    cartIsVisibe ? classVisible = 'visible' : classVisible=""

    function handleCartCollapse(){
        setCartVisibility(false)
    }

    function handleRemoveSelf(event, id){

        event.preventDefault()

        setCartItems(cartItems.filter(item => item.id !== id))
    }

    return(

        <>
            <div id="cart-container" className={classVisible}>

                <img src={arrowIcon} alt="" onClick={handleCartCollapse}/>

                <h3>SHOPPING CART</h3>
                {   
                    cartItems.length ?
                    cartItems.map(cartItem => {
                            return (
                            <form className="cart-item" key={cartItem.id} onSubmit={
                                (event) => handleRemoveSelf(event, cartItem.id)
                            }>
                                <h3>{cartItem.title}</h3>
                                <p>Quantity: {cartItem.itemQty}</p>
                                <span>R${cartItem.value}</span>
                                <ButtonRemove type="submit"/>
                            </form>
                            )
                    }) 
                    : 
                    <div></div>
                }
            </div>
            
            <SumItems isVisible={classVisible}/>

            <div id="cart-border" className={classVisible}>
            </div>
        </>

        
    )
}