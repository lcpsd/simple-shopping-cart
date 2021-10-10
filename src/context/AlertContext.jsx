import { createContext, useState } from "react";

export const AlertContext = createContext([])

export function AlertContextProvider(props){

    const [message, setMessage] = useState('')

    const [isActive, setActive] = useState(false)

    function showAlert(messageToShow){
        setActive(true)
        setMessage(messageToShow)
    }

    return(
        <AlertContext.Provider value={{message, isActive, showAlert, setActive}}>
            {props.children}
        </AlertContext.Provider>
    )
}