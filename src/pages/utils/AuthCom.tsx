import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"




export function AuthCom(props:PropsWithChildren) {
    console.log(props)
    return (
        <>
            {
                window.sessionStorage.getItem('react-token') ? 
                props.children : 
                <Navigate to='/login'/>
            }
        </>
    )
}