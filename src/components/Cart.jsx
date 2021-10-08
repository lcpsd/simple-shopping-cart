import useCart from "../hooks/useCart"


export function Cart(){
    const {cartItems, cartIsVisibe} = useCart()
    
    return(
        <div>
            {
                cartItems.map(cartItem => {
                    if(cartItem && cartIsVisibe){
                        return <div key={cartItem.id}>
                            <h2>{cartItem.title}</h2>
                            <span>{cartItem.itemQty}</span>
                            <span>{cartItem.value}</span>
                        </div>
                    }
                    return <div></div>
                })
            }
        </div>
    )
}