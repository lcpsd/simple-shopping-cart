import useCart from '../hooks/useCart'
import shoppingCartIcon from '../public/shopping-cart.png'

export function CartCounter(){

    const {cartItems, setCartVisibility, cartIsVisibe} = useCart()

    function toggleCartVisibility(){
        if(cartItems.length)
        cartIsVisibe ? setCartVisibility(false) : setCartVisibility(true)
    }

    return(
        <div onClick={toggleCartVisibility}>
            {cartItems.length}
            <img src={shoppingCartIcon} alt="" />
        </div>
    )
}