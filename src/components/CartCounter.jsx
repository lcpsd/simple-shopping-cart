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
        <div id="cart-counter">
            <div id="logo">
                <span>XingLing</span> Store
            </div>
            <span id="cart-section" onClick={toggleCartVisibility}>
                <p>{cartItems.length}</p>
                <img src={shoppingCartIcon} alt="" />
                {
                    cartItems.length > 0 ?
                    <div id="cart-badge" >
                        Check Cart
                    </div>
                    :
                    ''
                }
            </span>
    
        </div>
    )
}