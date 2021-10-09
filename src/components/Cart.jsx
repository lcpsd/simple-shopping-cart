import useCart from "../hooks/useCart"
import {ButtonRemove} from "../components/ButtonRemove"

export function Cart(){
    const {cartItems, cartIsVisibe, setCartItems} = useCart()

    function handleRemoveSelf(event, id){

        event.preventDefault()

        setCartItems(cartItems.filter(item => item.id !== id))
    }

    return(
        <>
            {
                cartIsVisibe ? 

                <div>
                    {   
                        cartItems.length ?
                        cartItems.map(cartItem => {
                                return (
                                <form key={cartItem.id} onSubmit={
                                    (event) => handleRemoveSelf(event, cartItem.id)
                                }>
                                    <h2>{cartItem.title}</h2>
                                    <span>{cartItem.itemQty}</span>
                                    <span>{cartItem.value}</span>
                                    <ButtonRemove type="submit"/>
                                </form>
                                )
                        }) 
                        : 
                        <div></div>
                    }
                </div>
                :
                <></>
            }
        </>
        
    )
}