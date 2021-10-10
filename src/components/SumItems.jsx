import useCart from '../hooks/useCart'
import '../styles/sumItems.scss'

export function SumItems(){

    const {cartSum} = useCart()

    return(
        <div id="sum-items">Total: R${cartSum}</div>
    )
}