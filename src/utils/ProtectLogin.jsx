import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectLogin({children}) {
    const navigate=useNavigate();
    useEffect(() => {
        const userLocal=JSON.parse(localStorage.getItem('user'));
        console.log("userloc",userLocal);
        if(!userLocal){
            return navigate ('/login') 
        }
    }, [])

    return children
}
