import useCart from '../hooks/useCart'
import '../styles/cartCounter.scss'
import shoppingCartIcon from '../public/shopping-cart.png'

export function CartCounter(){

    const {cartItems, setCartVisibility, cartIsVisibe} = useCart()

    function toggleCartVisibility(){
        if(cartItems.length)
        cartIsVisibe ? setCartVisibility(false) : setCartVisibility(true)
    }

    return(
        <div id="cartCounter">
            <div id="logo">
                <span>XingLing</span> Store
            </div>
            <span onClick={toggleCartVisibility}>
                {cartItems.length}
                <img src={shoppingCartIcon} alt="" />
                <span id="go-to-cart-badge">
                    Go to cart
                </span>
            </span>
            
        </div>
    )
}