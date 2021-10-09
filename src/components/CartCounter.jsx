import useCart from '../hooks/useCart'

export function CartCounter(){

    const {cartItems, setCartVisibility, cartIsVisibe} = useCart()

    function toggleCartVisibility(){
        if(cartItems.length)
        cartIsVisibe ? setCartVisibility(false) : setCartVisibility(true)
    }

    return(
        <div onClick={toggleCartVisibility}>{cartItems.length}</div>
    )
}