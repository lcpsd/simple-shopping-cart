import useCart from '../hooks/useCart'
import '../styles/sumItems.scss'

export function SumItems({isVisible}){

    const {cartSum} = useCart()

    return(
        <div id="sum-items" className={isVisible}>
            Total: {cartSum.toLocaleString('us',{style: 'currency', currency: 'USD'})}
        </div>
    )
}