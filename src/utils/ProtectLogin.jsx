import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectLogin({children}) {
    const [isLogged, setIsLogged] = useState(false)
    const navigate=useNavigate()
    const logged = false
    useEffect(() => {
        if(!isLogged){
            return navigate ('/login') 
        }
    }, [isLogged])

    return children
}
