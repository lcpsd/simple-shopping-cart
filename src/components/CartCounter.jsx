import useCart from '../hooks/useCart'

export function CartCounter(){

    const {cartItems} = useCart()

    return(
        <span>{cartItems.length}</span>
    )
}