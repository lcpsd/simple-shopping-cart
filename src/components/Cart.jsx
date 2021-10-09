import useCart from "../hooks/useCart"


export function Cart(){
    const {cartItems, cartIsVisibe} = useCart()
    
    return(
        <>
            {
                cartIsVisibe ? 

                <div>
                    {   
                        cartItems.length ?
                        cartItems.map(cartItem => {
                                return (
                                <div key={cartItem.id}>
                                    <h2>{cartItem.title}</h2>
                                    <span>{cartItem.itemQty}</span>
                                    <span>{cartItem.value}</span>
                                </div>
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