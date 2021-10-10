import { useAlert } from '../hooks/useAlert'
import '../styles/alert.scss'

export function Alert() {

    const {isActive, message, setActive} = useAlert()

    let activeClass

    function setActiveClass(){
        activeClass = 'active'
        setTimeout(() => setActive(false), 2000);
    }

    isActive ?  setActiveClass(): activeClass = 'inative'

    return(
        <div className={`alert ${activeClass}`}>{message}</div>
    )
}